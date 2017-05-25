import User from '../../models/user';

const routes = [{
  method: 'GET',
  path: '/api/users',
  handler(request, reply) {
    return User.find((err, users) => {
      if (err) {
        return reply({
          error: {
            message: 'Server error',
          },
        }).code(500);
      }

      return reply({
        users,
      });
    });
  },
}, {
  method: 'GET',
  path: '/api/users/{id}',
  handler(request, reply) {
    const { id } = request.params;

    return User.findById(id, (err, user) => {
      if (err) {
        return reply({
          error: {
            message: 'Server error',
          },
        }).code(500);
      }

      return reply({
        user,
      });
    });
  },
}, {
  method: 'POST',
  path: '/api/users',
  handler(request, reply) {
    const { payload } = request;

    return User.create(payload, (err, user) => {
      if (err) {
        return reply({
          error: {
            message: 'Server error',
          },
        }).code(500);
      }

      return reply({
        user,
      });
    });
  },
}, {
  method: 'PUT',
  path: '/api/users/{id}',
  handler(request, reply) {
    const { id } = request.params;
    const { payload } = request;

    return User.findByIdAndUpdate(id, payload, { new: true }, (err, user) => {
      if (err) {
        return reply({
          error: {
            message: 'Server error',
          },
        }).code(500);
      }

      return reply({
        user,
      });
    });
  },
}, {
  method: 'DELETE',
  path: '/api/users/{id}',
  handler(request, reply) {
    const { id } = request.params;

    return User.findByIdAndRemove(id, (err, res) => {
      if (err) {
        return reply({
          error: {
            message: 'Server error',
          },
        }).code(500);
      }

      return reply({});
    });
  },
}, {
  method: 'POST',
  path: '/api/users/email-availability/{exceptID?}',
  handler(request, reply) {
    const { exceptID } = request.params;
    const { email } = request.payload;

    return User.where({ email }).findOne((err, user) => {
      if (err) {
        return reply({
          error: {
            message: 'Server error',
          },
        }).code(500);
      }

      return reply({
        availability: !user || user._id == exceptID,
      });
    });
  },
}];

export default routes;
