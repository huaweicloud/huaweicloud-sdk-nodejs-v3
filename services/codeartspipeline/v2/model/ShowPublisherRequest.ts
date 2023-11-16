

export class ShowPublisherRequest {
    private 'domain_id'?: string;
    public body?: Array<string>;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ShowPublisherRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: Array<string>): ShowPublisherRequest {
        this['body'] = body;
        return this;
    }
}