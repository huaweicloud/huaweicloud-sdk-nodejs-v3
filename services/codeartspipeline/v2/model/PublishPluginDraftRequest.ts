import { PluginPartQueryDTO } from './PluginPartQueryDTO';


export class PublishPluginDraftRequest {
    private 'domain_id'?: string;
    public body?: PluginPartQueryDTO;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): PublishPluginDraftRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: PluginPartQueryDTO): PublishPluginDraftRequest {
        this['body'] = body;
        return this;
    }
}