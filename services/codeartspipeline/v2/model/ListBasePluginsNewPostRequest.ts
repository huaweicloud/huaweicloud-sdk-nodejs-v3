import { BusinessTypePluginsQueryDTO } from './BusinessTypePluginsQueryDTO';


export class ListBasePluginsNewPostRequest {
    private 'domain_id'?: string;
    public offset?: number;
    public limit?: number;
    public body?: BusinessTypePluginsQueryDTO;
    public constructor(domainId?: string, offset?: number, limit?: number) { 
        this['domain_id'] = domainId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withDomainId(domainId: string): ListBasePluginsNewPostRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withOffset(offset: number): ListBasePluginsNewPostRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBasePluginsNewPostRequest {
        this['limit'] = limit;
        return this;
    }
    public withBody(body: BusinessTypePluginsQueryDTO): ListBasePluginsNewPostRequest {
        this['body'] = body;
        return this;
    }
}