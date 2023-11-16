import { PublishPluginDTO } from './PublishPluginDTO';


export class PublishPluginRequest {
    private 'domain_id'?: string;
    public body?: PublishPluginDTO;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): PublishPluginRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: PublishPluginDTO): PublishPluginRequest {
        this['body'] = body;
        return this;
    }
}