import { CreateCertificateByCsrRequestBody } from './CreateCertificateByCsrRequestBody';


export class CreateCertificateByCsrRequest {
    public body?: CreateCertificateByCsrRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateCertificateByCsrRequestBody): CreateCertificateByCsrRequest {
        this['body'] = body;
        return this;
    }
}