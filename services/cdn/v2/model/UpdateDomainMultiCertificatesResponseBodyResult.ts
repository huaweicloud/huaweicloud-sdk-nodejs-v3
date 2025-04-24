

export class UpdateDomainMultiCertificatesResponseBodyResult {
    private 'domain_name'?: string;
    public status?: string;
    public reason?: string;
    public constructor() { 
    }
    public withDomainName(domainName: string): UpdateDomainMultiCertificatesResponseBodyResult {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withStatus(status: string): UpdateDomainMultiCertificatesResponseBodyResult {
        this['status'] = status;
        return this;
    }
    public withReason(reason: string): UpdateDomainMultiCertificatesResponseBodyResult {
        this['reason'] = reason;
        return this;
    }
}