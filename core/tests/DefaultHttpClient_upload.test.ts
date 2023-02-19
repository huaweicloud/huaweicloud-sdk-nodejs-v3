import { DefaultHttpClient } from '../http/DefaultHttpClient';
import { IHttpRequest } from '../http/IHttpRequest';
import FormData from 'form-data';
import fs from 'fs';
import nock from 'nock';
import path from 'path';

const nockBaseUrl = 'https://api.example.com';
describe('File upload', () => {

    let httpClient: DefaultHttpClient;

    beforeAll(() => {
        httpClient = new DefaultHttpClient();
    });

    afterEach(() => {
        nock.cleanAll();
    });

    it('should upload a file with multipart/form-data', async () => {
        /**
         * 
         * The "headers" need to explicitly define the "multipart/form-data" type.
         * The "form-data" type will be specially handled in DefaultHttpClient.ts to obtain its unique headers.
         * This is because it ultimately sends a request with the following format: 'content-type': 'multipart/form-data; boundary=xxxx'
         * 
        */
        const fileContent = 'Hello World!';
        const filePath = path.join(__dirname, 'test.txt');
        fs.writeFileSync(filePath, fileContent);

        const httpClient = new DefaultHttpClient();
        const endpoint = 'https://httpbin.org/post';
        // Create a FormData object and append the file
        const formData = new FormData();
        formData.append('myfile', fs.createReadStream(filePath));

        // Create the request
        const request: IHttpRequest = {
            endpoint,
            method: 'POST',
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const response = await httpClient.sendRequest(request);
        const responseBody = response.data;

        // 当 45 行的 content-type 不设置的时候，response 一样会成功，但是不会有正确的返回
        // 返回结果中 files 是一个空对象
        // 所以必须校验 files 的属性
        expect(responseBody.files).toBeDefined();
        expect(responseBody.files.myfile).toBeDefined();
        expect(responseBody.files.myfile).toEqual("Hello World!")

        fs.unlinkSync(filePath);
    });

    it('should upload a file using multipart/form-data and nock', async () => {
        const expectedResponse = {
            result: 'success',
            files: {
                myfile: 'Hello World!'
            }
        };
        const fileContent = 'Hello World!';
        const filePath = path.join(__dirname, 'test.txt');
        fs.writeFileSync(filePath, fileContent);
        const formData = new FormData();
        formData.append('myfile', fs.createReadStream(filePath));

        nock(nockBaseUrl)
            .post('/upload')
            .reply(200, expectedResponse);

        const request = {
            method: 'POST',
            endpoint: `${nockBaseUrl}/upload`,
            headers: {
                'content-type': 'multipart/form-data'
            },
            data: formData,
        };

        const response = await httpClient.sendRequest(request);
 
        expect(response.data).toEqual(expectedResponse);
        expect(response.data!.files).toBeDefined();
        expect(response.data!.files.myfile).toBeDefined();

        fs.unlinkSync(filePath);
    });
}); 