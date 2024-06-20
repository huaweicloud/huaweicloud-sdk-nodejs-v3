

export class DeletePublisherRequest {
    private 'domain_id'?: string;
    private 'publisher_unique_id'?: string;
    public constructor(domainId?: string, publisherUniqueId?: string) { 
        this['domain_id'] = domainId;
        this['publisher_unique_id'] = publisherUniqueId;
    }
    public withDomainId(domainId: string): DeletePublisherRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPublisherUniqueId(publisherUniqueId: string): DeletePublisherRequest {
        this['publisher_unique_id'] = publisherUniqueId;
        return this;
    }
    public set publisherUniqueId(publisherUniqueId: string  | undefined) {
        this['publisher_unique_id'] = publisherUniqueId;
    }
    public get publisherUniqueId(): string | undefined {
        return this['publisher_unique_id'];
    }
}