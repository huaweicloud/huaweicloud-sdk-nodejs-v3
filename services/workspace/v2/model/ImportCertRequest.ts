import { ImportCertificatePemReq } from './ImportCertificatePemReq';


export class ImportCertRequest {
    public body?: ImportCertificatePemReq;
    public constructor() { 
    }
    public withBody(body: ImportCertificatePemReq): ImportCertRequest {
        this['body'] = body;
        return this;
    }
}