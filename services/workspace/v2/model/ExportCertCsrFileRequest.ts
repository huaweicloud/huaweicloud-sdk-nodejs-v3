import { CreateCertSignatureReq } from './CreateCertSignatureReq';


export class ExportCertCsrFileRequest {
    public body?: CreateCertSignatureReq;
    public constructor() { 
    }
    public withBody(body: CreateCertSignatureReq): ExportCertCsrFileRequest {
        this['body'] = body;
        return this;
    }
}