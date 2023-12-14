

export class DeletePublishTemplateRequest {
    public domain?: string;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): DeletePublishTemplateRequest {
        this['domain'] = domain;
        return this;
    }
}