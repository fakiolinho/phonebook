import path from 'path';
import Hapi from 'hapi';
import mongoose from 'mongoose';
import Webpack from 'webpack';
import dotenv from 'dotenv';

import routes from './routes';

// Parse Environmental Vars
dotenv.config();

// MongoDB Connection
mongoose.Promise = global.Promise;
const options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
};

const { MONGO_URI, HOST, PORT, NODE_ENV } = process.env;
const mongoURI = NODE_ENV === 'test' ? 'mongodb://localhost/test' : MONGO_URI;

mongoose.connect(mongoURI, options);

const db = mongoose.connection;
db.on('error', (err) => {
  throw err;
});

// Hapi Server
const server = new Hapi.Server();
const host = HOST;
const port = PORT;

server.connection({ host, port });

server.register(require('inert'), (err) => {
  if (err) {
    throw err;
  }

  const webpackConfig = require('../webpack');
  const compiler = Webpack(webpackConfig);

  // HMR for Dev ENV
  if (NODE_ENV === 'development') {
    const devMiddleware = require('webpack-dev-middleware')(compiler, {
      host,
      port,
      historyApiFallback: true,
      publicPath: webpackConfig.output.publicPath,
    });
    const hotMiddleware = require('webpack-hot-middleware')(compiler, {
      log: () => {
      },
    });

    server.ext('onRequest', (request, reply) => {
      devMiddleware(request.raw.req, request.raw.res, (err) => {
        if (err) {
          return reply(err);
        }
        return reply.continue();
      });
    });

    server.ext('onRequest', (request, reply) => {
      hotMiddleware(request.raw.req, request.raw.res, (err) => {
        if (err) {
          return reply(err);
        }
        return reply.continue();
      });
    });
  }

  // API routes
  server.route(routes);

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.join(__dirname, '../dist'),
        index: true,
        listing: true,
      },
    },
  });

  // Redirect to SPA when Hapi doesn't find a route
  server.ext('onPreResponse', (request, reply) => {
    if (request.response.isBoom) {
      return reply.file(path.join(__dirname, '../dist/index.html'));
    }
    return reply.continue();
  });

  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server running at:', server.info.uri);
  });
});

export default server;
