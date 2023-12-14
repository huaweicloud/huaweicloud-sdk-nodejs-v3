

export class ListPublishTemplateRequest {
    public domain?: string;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): ListPublishTemplateRequest {
        this['domain'] = domain;
        return this;
    }
}