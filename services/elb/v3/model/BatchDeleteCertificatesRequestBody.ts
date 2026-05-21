

export class BatchDeleteCertificatesRequestBody {
    public certificates?: Array<string>;
    public constructor() { 
    }
    public withCertificates(certificates: Array<string>): BatchDeleteCertificatesRequestBody {
        this['certificates'] = certificates;
        return this;
    }
}