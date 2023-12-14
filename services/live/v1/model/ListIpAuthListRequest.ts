

export class ListIpAuthListRequest {
    public domain?: string;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): ListIpAuthListRequest {
        this['domain'] = domain;
        return this;
    }
}