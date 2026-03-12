import { CreateCertificateAuthorityRequestBody } from './CreateCertificateAuthorityRequestBody';


export class CreateCertificateAuthorityRequest {
    public body?: CreateCertificateAuthorityRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateCertificateAuthorityRequestBody): CreateCertificateAuthorityRequest {
        this['body'] = body;
        return this;
    }
}