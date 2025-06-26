

export class AddDomainNameRequestBody {
    private 'domain_name'?: string;
    private 'certificate_id'?: string;
    public constructor(domainName?: string, certificateId?: string) { 
        this['domain_name'] = domainName;
        this['certificate_id'] = certificateId;
    }
    public withDomainName(domainName: string): AddDomainNameRequestBody {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withCertificateId(certificateId: string): AddDomainNameRequestBody {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
}