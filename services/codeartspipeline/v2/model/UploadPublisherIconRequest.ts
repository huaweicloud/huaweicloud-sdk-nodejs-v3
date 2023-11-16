import { UploadPublisherIconRequestBody } from './UploadPublisherIconRequestBody';


export class UploadPublisherIconRequest {
    private 'domain_id'?: string;
    private 'publisher_en_name'?: string;
    public body?: UploadPublisherIconRequestBody;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UploadPublisherIconRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPublisherEnName(publisherEnName: string): UploadPublisherIconRequest {
        this['publisher_en_name'] = publisherEnName;
        return this;
    }
    public set publisherEnName(publisherEnName: string  | undefined) {
        this['publisher_en_name'] = publisherEnName;
    }
    public get publisherEnName(): string | undefined {
        return this['publisher_en_name'];
    }
    public withBody(body: UploadPublisherIconRequestBody): UploadPublisherIconRequest {
        this['body'] = body;
        return this;
    }
}