

export class BatchDeleteCertificatesRequestBody {
    public certificates?: Array<string>;
    public constructor(certificates?: Array<string>) { 
        this['certificates'] = certificates;
    }
    public withCertificates(certificates: Array<string>): BatchDeleteCertificatesRequestBody {
        this['certificates'] = certificates;
        return this;
    }
}