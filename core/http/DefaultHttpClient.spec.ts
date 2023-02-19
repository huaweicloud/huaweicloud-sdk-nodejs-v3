import { DefaultHttpClient } from './DefaultHttpClient';
import { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

describe('DefaultHttpClient', () => {
  let httpClient: DefaultHttpClient;

  beforeEach(() => {
    httpClient = new DefaultHttpClient();
  });

  describe('sendRequest', () => {
    it('should return the response object when successful', async () => {
      const httpRequest = {
        endpoint: 'https://jsonplaceholder.typicode.com/todos/1',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const httpResponse = await httpClient.sendRequest(httpRequest);
      expect(httpResponse.statusCode).to.equal(200);
      expect(httpResponse.data.userId).to.equal(1);
    });

    it('should throw an error when the endpoint is invalid', async () => {
      const httpRequest = {
        endpoint: 'https://invalidendpoint',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await expect(async () => {
        await httpClient.sendRequest(httpRequest);
      }).to.be.rejected;
    });
  });

});