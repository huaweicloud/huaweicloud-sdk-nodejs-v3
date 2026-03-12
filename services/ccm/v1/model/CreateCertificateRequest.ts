import { CreateCertificateRequestBody } from './CreateCertificateRequestBody';


export class CreateCertificateRequest {
    public body?: CreateCertificateRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateCertificateRequestBody): CreateCertificateRequest {
        this['body'] = body;
        return this;
    }
}