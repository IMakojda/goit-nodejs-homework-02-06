const authControllers = require('./authControllers');
const authService = require('../services/authService')
const emailService = require('../services/email.service')
describe('Auth Controller', () => {
  describe('Register', () => {
    test('New user should refister with email', async () => {

      let next = jest.fn();

      authService.registerUserServ = jest.fn((data) => data);
      emailService.sendEmail = jest.fn();
      const req = {
        body: {
          email: 'ambasador@gmail.com',
          password: 'Ambasador1111',
        }
      }

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn((data) => data)
      }
      const result = await authControllers.registerUser(req, res, next);
      console.log(result);
      expect(result.code).toBe(201);
      expect(result.user.email).toBe('ambasador@gmail.com');
      expect(next).toBeCalledTimes(0);

    })
  })

  describe('Login', () => {
    test('User should login with corect email', async () => {

      const next = jest.fn();

      const req = {
        body: {
          email: 'ambasador@gmail.com',
          password: 'Ambasador1111',
        }
      }

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn((data) => data)
      }

      authService.loginUserServ = jest.fn(() => {
        return {
          token: 'testTokenJWT'
        }
      })

      const result = await authControllers.loginUser(req, res, next);
      console.log(result);
      expect(result.code).toBe(200);
      expect(result.data.token).toBe('testTokenJWT');
    })
  })
})

