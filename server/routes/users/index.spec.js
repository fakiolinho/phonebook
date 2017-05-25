import 'babel-polyfill';
import { expect } from 'code';
import Lab from 'lab';

import User from '../../models/user';
import server from '../../';

let lab = exports.lab = Lab.script();
const { describe, it, beforeEach, afterEach } = lab;

describe('test users routes', () => {
  beforeEach(async () => {
    const user = new User({
      firstName: 'John',
      lastName: 'Doe',
      email: 'some@email.com',
      homeNumber: '1',
      workNumber: '1',
      mobileNumber: '1',
    });
    await user.save();
  });

  afterEach(async () => {
    await User.remove({}).exec();
  });

  describe('test route GET /api/users', () => {
    it('should have 200 status', async () => {
      await server.inject({
        method: 'GET',
        url: '/api/users',
      }, (response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.result).to.include('users');
        expect(response.result.users).to.be.an.array();
      });
    });
  });

  describe('test route GET /api/users/{id}', () => {
    it('should have 200 status', async () => {
      const user = await User.findOne().exec();

      await server.inject({
        method: 'GET',
        url: `/api/users/${user._id}`,
      }, (response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.result).to.include('user');
        expect(response.result.user).to.be.an.object();
      });
    });
  });

  describe('test route POST /api/users', () => {
    it('should have 200 status', async () => {
      await server.inject({
        method: 'POST',
        url: '/api/users',
        payload: {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'someOther@email.com',
          homeNumber: '1',
          workNumber: '1',
          mobileNumber: '1',
        },
      }, (response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.result).to.include('user');
        expect(response.result.user).to.be.an.object();
      });
    });
  });

  describe('test route PUT /api/users/{id}', () => {
    it('should have 200 status', async () => {
      const user = await User.findOne().exec();

      await server.inject({
        method: 'PUT',
        url: `/api/users/${user._id}`,
        payload: {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'someOther@email.com',
          homeNumber: '1',
          workNumber: '1',
          mobileNumber: '1',
        },
      }, (response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.result).to.include('user');
        expect(response.result.user).to.be.an.object();
      });
    });
  });

  describe('test route DELETE /api/users/{id}', () => {
    it('should have 200 status', async () => {
      const user = await User.findOne().exec();

      await server.inject({
        method: 'DELETE',
        url: `/api/users/${user._id}`,
      }, (response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.result).to.be.an.object();
      });
    });
  });
});
