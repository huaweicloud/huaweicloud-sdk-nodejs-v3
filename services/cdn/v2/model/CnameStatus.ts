

export class CnameStatus {
    public status?: number;
    private 'domain_name'?: string;
    public constructor(status?: number, domainName?: string) { 
        this['status'] = status;
        this['domain_name'] = domainName;
    }
    public withStatus(status: number): CnameStatus {
        this['status'] = status;
        return this;
    }
    public withDomainName(domainName: string): CnameStatus {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
}