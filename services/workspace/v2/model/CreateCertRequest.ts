import { CreateCertificateReq } from './CreateCertificateReq';


export class CreateCertRequest {
    public body?: CreateCertificateReq;
    public constructor() { 
    }
    public withBody(body: CreateCertificateReq): CreateCertRequest {
        this['body'] = body;
        return this;
    }
}