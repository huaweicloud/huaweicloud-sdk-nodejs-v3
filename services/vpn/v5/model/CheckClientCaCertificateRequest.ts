import { ImportClientCaCertificateRequestBody } from './ImportClientCaCertificateRequestBody';


export class CheckClientCaCertificateRequest {
    public body?: ImportClientCaCertificateRequestBody;
    public constructor() { 
    }
    public withBody(body: ImportClientCaCertificateRequestBody): CheckClientCaCertificateRequest {
        this['body'] = body;
        return this;
    }
}