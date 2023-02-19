import { DefaultHttpClient } from '../http/DefaultHttpClient';
import { DefaultHttpResponse } from '../http/DefaultHttpResponse';
import { IHttpRequest } from '../http/IHttpRequest';
import nock from 'nock';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';

const nockBaseUrl = 'https://api.example.com';

describe('HTTP Client', () => {
    let httpClient: DefaultHttpClient;

    beforeAll(() => {
        httpClient = new DefaultHttpClient();
    });

    afterEach(() => {
        nock.cleanAll();
    });

    it('should handle a GET request', async () => {
        const expectedResponse = { result: 'success' };
        nock(nockBaseUrl).get('/test').reply(200, expectedResponse);

        const request: IHttpRequest = {
            endpoint: nockBaseUrl + '/test',
            method: 'GET',
        };
        const response = await httpClient.sendRequest(request);

        expect(response.data).toEqual(expectedResponse);
        expect(response.statusCode).toBe(200);
    });

    it('should handle a POST request with a JSON payload', async () => {
        const expectedResponse = { result: 'success' };
        const payload = { foo: 'bar' };
        nock(nockBaseUrl).post('/test', payload).reply(200, expectedResponse);

        const request: IHttpRequest = {
            endpoint: nockBaseUrl + '/test',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: payload,
        };
        const response = await httpClient.sendRequest(request);

        expect(response.data).toEqual(expectedResponse);
        expect(response.statusCode).toBe(200);
    });

    it('should handle a PUT request with a form data payload', async () => {
        const expectedResponse = { result: 'success' };
        const formData = { foo: 'bar' };
        nock(nockBaseUrl).put('/test', formData).reply(200, expectedResponse);

        const request: IHttpRequest = {
            endpoint: nockBaseUrl + '/test',
            method: 'PUT',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: formData
        };
        const response = await httpClient.sendRequest(request);

        expect(response.data).toEqual(expectedResponse);
        expect(response.statusCode).toBe(200);
    });

    it('should handle a DELETE request with a path parameter', async () => {
        const expectedResponse = { result: 'success' };
        const pathParams = { id: 123 };
        nock(nockBaseUrl).delete(`/test/123`).reply(200, expectedResponse);

        const request: IHttpRequest = {
            endpoint: nockBaseUrl + '/test/123',
            method: 'DELETE'
        };
        const response = await httpClient.sendRequest(request);

        expect(response.data).toEqual(expectedResponse);
        expect(response.statusCode).toBe(200);
    });

    it('should throw an error when server returns error status code', async () => {
        const request: IHttpRequest = {
            method: 'GET',
            endpoint: 'http://example.com',
        };
        const scope = nock('http://example.com').get('/').reply(500, 'Internal Server Error');

        try {
            await httpClient.sendRequest(request);
        } catch (error: any) {
            expect(error.data).toBe('Internal Server Error');
        }

        // await expect(httpClient.sendRequest(request)).rejects.toThrowError('Internal Server Error');
        scope.done();
    });

    describe('File upload and download tests', () => {
        it('should upload a file', async () => {
            const expectedResponse = { result: 'success' };
            const fileContent = 'Hello World!';
            const filePath = path.join(__dirname, 'test.txt');
            fs.writeFileSync(filePath, fileContent);
            const formData = new FormData();
            formData.append('file', fs.createReadStream(filePath));

            nock(nockBaseUrl)
                .post('/upload')
                .reply(200, expectedResponse);

            const request = {
                method: 'POST',
                endpoint: `${nockBaseUrl}/upload`,
                headers: formData.getHeaders(),
                data: formData,
            };

            const response = await httpClient.sendRequest(request);
            expect(response.data).toEqual(expectedResponse);

            fs.unlinkSync(filePath);
        });

        it('should download a file', async () => {
            const filePath = path.join(__dirname, 'test.zip');
            const fileContent = 'test zip file content';
            nock(nockBaseUrl)
                .get('/download')
                .replyWithFile(200, filePath, {
                    'Content-Type': 'application/zip',
                });

            const request = {
                method: 'GET',
                endpoint: `${nockBaseUrl}/download`,
            };

            const response = await httpClient.sendRequest(request);

            expect(response.headers['content-type']).toEqual('application/zip');
            expect(response.data).toEqual(fileContent);

            fs.unlinkSync(filePath);
        });

        it('should download file using octet-stream', async () => {
            const expectedResponse = 'file content';
            nock('http://example.com')
                .get('/file')
                .reply(200, expectedResponse, {
                    'Content-Type': 'application/octet-stream',
                    'Content-Disposition': 'attachment; filename="file.txt"',
                });

            const request: IHttpRequest = {
                method: 'GET',
                endpoint: 'http://example.com/file',
            };
            const response = await httpClient.sendRequest(request);
            expect(response.headers['content-disposition']).toBe('attachment; filename="file.txt"');
            expect(response.data).toBe(expectedResponse);
        });

        // it('should upload file using octet-stream', async () => {
        //     const fileContent = 'file content';
        //     const fileName = 'file.txt';
        //     const formData = new FormData();
        //     formData.append('file', new Blob([fileContent]), fileName);
        //     nock('http://example.com')
        //         .post('/upload', formData)
        //         .reply(200);

        //     const request: IHttpRequest = {
        //         method: 'POST',
        //         endpoint: 'http://example.com/upload',
        //         headers: { 'Content-Type': 'multipart/form-data' },
        //         data: formData,
        //     };
        //     const response = await httpClient.sendRequest(request);
        //     expect(response.statusCode).toBe(200);
        // });

        it('should send and receive binary data using application/octet-stream content type', async () => {
            const expectedResponse = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
            const binaryData = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
            const bufferData = Buffer.from(binaryData);

            // Mock the response
            const scope = nock(nockBaseUrl)
                .post('/test', bufferData, {
                    reqheaders: {
                        'Content-Type': 'application/octet-stream',
                    },
                })
                .reply(200, expectedResponse, {
                    'Content-Type': 'application/octet-stream',
                });

            // Create the request
            const request: IHttpRequest = {
                endpoint: nockBaseUrl + '/test',
                method: 'POST',
                headers: { 'Content-Type': 'application/octet-stream' },
                data: binaryData.buffer,
            };

            // Send the request and validate the response
            const response = await httpClient.sendRequest(request);
            expect(new Uint8Array(response.data)).toEqual(expectedResponse);

            // Verify that the mock was called
            scope.done();
        });

        it('should upload file using octet-stream', async () => {
            const fileContent = 'file content';
            const fileName = 'file.txt';
            const formData = new FormData();
            formData.append('file', new Blob([fileContent]), fileName);
            const boundary = formData.getBoundary();
            const body = formData.getBuffer();
            nock('http://example.com')
                .post('/upload', body)
                .matchHeader('content-type', `multipart/form-data; boundary=${boundary}`)
                //   .matchHeader('content-length', contentLength)
                .reply(200);

            const request: IHttpRequest = {
                method: 'POST',
                endpoint: 'http://example.com/upload',
                headers: { 'Content-Type': 'application/json' },
                data: formData,
            };
            const response = await httpClient.sendRequest(request);
            expect(response.statusCode).toBe(200);
        });
        it('should upload file using octet-stream', async () => {
            const fileContent = 'file content';
            const fileName = 'file.txt';

            const form = new FormData();
            form.append('file', fs.createReadStream(fileContent));
            form.append('name', fileName);

            const boundary = form.getBoundary();
            // const contentLength = form.getLengthSync();
            // const body = form.getBuffer();

            nock('http://example.com')
                .post('/upload', form)
                .matchHeader('content-type', `multipart/form-data; boundary=${boundary}`)
                // .matchHeader('content-length', `${contentLength}`)
                .reply(200);

            const request: IHttpRequest = {
                method: 'POST',
                endpoint: 'http://example.com/upload',
                headers: { 'Content-Type': `multipart/form-data; boundary=${boundary}` },
                data:form
            };
            const response = await httpClient.sendRequest(request);
            expect(response.statusCode).toBe(200);
        });
    });


});
