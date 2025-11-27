

export class ShowQuotaRequest {
    public domainid?: string;
    public constructor(domainid?: string) { 
        this['domainid'] = domainid;
    }
    public withDomainid(domainid: string): ShowQuotaRequest {
        this['domainid'] = domainid;
        return this;
    }
}