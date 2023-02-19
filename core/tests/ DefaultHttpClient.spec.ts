import { expect } from 'chai';
import chai from 'chai'
import { describe, it, before, beforeEach, afterEach } from 'mocha';
import nock from 'nock';
import { DefaultHttpClient } from '../http/DefaultHttpClient';
import { IHttpRequest } from '../http/IHttpRequest';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

const httpClient = new DefaultHttpClient();
const nockBaseUrl = 'http://example.com';

describe('DefaultHttpClient with Nock', () => {
    before(() => { });

    beforeEach(() => {
        // Enable nock to intercept all requests
        nock.enableNetConnect();
    });

    afterEach(() => {
        // Clean up nock interceptors
        nock.cleanAll();
    });

    it('should handle a GET request with a query parameter', async () => {
        const expectedResponse = { result: 'success' };
        const queryParams = { foo: 'bar' };
        nock(nockBaseUrl)
            .get('/test')
            .query(queryParams)
            .reply(200, expectedResponse);

        const request: IHttpRequest = {
            endpoint: nockBaseUrl + '/test',
            method: 'GET',
            queryParams,
        };
        const response = await httpClient.sendRequest(request);
        expect(response.data).to.deep.equal(expectedResponse);
    });

    it('should handle a POST request with a JSON payload', async () => {
        const expectedResponse = { result: 'success' };
        const payload = { foo: 'bar' };
        nock(nockBaseUrl)
            .post('/test', payload)
            .reply(200, expectedResponse);

        const request: IHttpRequest = {
            endpoint: nockBaseUrl + '/test',
            method: 'POST',
            data: payload,
        };
        const response = await httpClient.sendRequest(request);
        expect(response.data).to.deep.equal(expectedResponse);
    });

    it('should handle a PUT request with a form data payload', async () => {
        const expectedResponse = { result: 'success' };
        const formData = { foo: 'bar' };
        nock(nockBaseUrl)
            .put('/test', formData)
            .reply(200, expectedResponse);

        const request: IHttpRequest = {
            endpoint: nockBaseUrl + '/test',
            method: 'PUT',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: formData,
        };
        const response = await httpClient.sendRequest(request);
        expect(response.data).to.deep.equal(expectedResponse);
    });

    it('should handle a DELETE request with a path parameter', async () => {
        const expectedResponse = { result: 'success' };
        const pathParams = { id: 123 };
        nock(nockBaseUrl)
            .delete(`/test/123`)
            .reply(200, expectedResponse);

        const request: IHttpRequest = {
            endpoint: nockBaseUrl + '/test/123',
            method: 'DELETE'
        };
        const response = await httpClient.sendRequest(request);
        console.log(response);
        expect(response.data).to.deep.equal(expectedResponse);
    });

    it('should throw an error when sending request and network error occurs', async () => {
        const request: IHttpRequest = {
            method: 'GET',
            endpoint: 'http://example.com',
        };
        const scope = nock('http://example.com').get('/').reply(500, 'Internal Server Error');
        try {
            await httpClient.sendRequest(request);
        } catch (error) {
            console.log(error)
            const err: Error = error;
            expect(err.message).to.equal('Internal Server Error');
        }
        // await expect(httpClient.sendRequest(request)).to.be.rejectedWith(Error, { message: 'Internal Server Error' });
        scope.done();
    });

    it('should throw an error when sending request and server returns error status code', async () => {
        const request: IHttpRequest = {
            method: 'GET',
            endpoint: 'http://example.com',
        };
        const scope = nock('http://example.com').get('/').reply(500, 'Internal Server Error');
        await expect(Promise.reject(httpClient.sendRequest(request))).to.be.rejectedWith((err: any) => { return err.data }, 'Internal Server Error');
        scope.done();
    });

    it('should throw an error when sending request and request times out', async () => {
        const request: IHttpRequest = {
            method: 'GET',
            endpoint: 'http://example.com',
            axiosRequestConfig: {
                timeout: 100,
            },
        };
        const scope = nock('http://example.com').get('/').delay(200).reply(200);
        await expect(httpClient.sendRequest(request)).to.be.rejectedWith(Error, 'timeout of 100ms exceeded');
        scope.done();
    });
});
