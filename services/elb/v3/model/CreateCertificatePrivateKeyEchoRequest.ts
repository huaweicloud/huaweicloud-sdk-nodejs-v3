import { CreateCertificatePrivateKeyEchoRequestBody } from './CreateCertificatePrivateKeyEchoRequestBody';


export class CreateCertificatePrivateKeyEchoRequest {
    public body?: CreateCertificatePrivateKeyEchoRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateCertificatePrivateKeyEchoRequestBody): CreateCertificatePrivateKeyEchoRequest {
        this['body'] = body;
        return this;
    }
}