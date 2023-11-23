import { PublisherRequest } from './PublisherRequest';


export class CreatePublisherRequest {
    private 'domain_id'?: string;
    public body?: PublisherRequest;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): CreatePublisherRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: PublisherRequest): CreatePublisherRequest {
        this['body'] = body;
        return this;
    }
}