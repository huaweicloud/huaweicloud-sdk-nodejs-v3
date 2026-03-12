

export class RevokeCertificateRequestBody {
    public reason?: string;
    public constructor() { 
    }
    public withReason(reason: string): RevokeCertificateRequestBody {
        this['reason'] = reason;
        return this;
    }
}