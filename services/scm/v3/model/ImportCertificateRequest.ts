import { ImportCertificateRequestBody } from './ImportCertificateRequestBody';


export class ImportCertificateRequest {
    public body?: ImportCertificateRequestBody;
    public constructor() { 
    }
    public withBody(body: ImportCertificateRequestBody): ImportCertificateRequest {
        this['body'] = body;
        return this;
    }
}