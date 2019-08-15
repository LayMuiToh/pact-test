import { Matchers } from '@pact-foundation/pact';

const axios = require('axios');

const { like } = Matchers;

const urlpath = '/api/identity-manager/v2/login';

describe('LoginService API', () => {
  const EXPECTED_BODY = {
    authToken: 'xxx',
    clientInfo: {
      clientId: '0662-3f053178426a',
    },
  };
  const BODY = {
    clientInfo: {
      clientId: null,
    },
    pass: 'Secret?',
    tenantId: 'xxx',
    userId: 'Mary@hotmail.com',
  };

  describe('login request', () => {
    beforeEach(() => {
      const interaction = {
        state: 'login with valid userId',
        uponReceiving: 'authToken and clientInfo clientId',
        withRequest: {
          method: 'POST',
          path: urlpath,
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
          },
          body: like(BODY),
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
          body: like(EXPECTED_BODY),
        },
      };
      return global.Platform.addInteraction(interaction);
    });

    // add expectations
    it('returns a successfully body', done => axios.request({
      method: 'POST',
      baseURL: `http://${global.host}:${global.port}`,
      url: urlpath,
      headers: {
        Accept: '*/*',
        'content-type': 'application/json',
      },
      data: BODY,
    })
      .then((response) => {
        expect(response.headers['content-type']).toEqual('application/json');
        expect(response.data).toEqual(EXPECTED_BODY);
        expect(response.status).toEqual(200);
        done();
      })
      .then(done));
  });
});
