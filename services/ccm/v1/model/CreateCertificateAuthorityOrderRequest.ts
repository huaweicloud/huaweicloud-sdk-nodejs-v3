import { CreateCertificateAuthorityOrderRequestBody } from './CreateCertificateAuthorityOrderRequestBody';


export class CreateCertificateAuthorityOrderRequest {
    public body?: CreateCertificateAuthorityOrderRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateCertificateAuthorityOrderRequestBody): CreateCertificateAuthorityOrderRequest {
        this['body'] = body;
        return this;
    }
}