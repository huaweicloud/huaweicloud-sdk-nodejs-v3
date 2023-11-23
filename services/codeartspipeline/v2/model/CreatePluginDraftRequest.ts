import { PluginDTO } from './PluginDTO';


export class CreatePluginDraftRequest {
    private 'domain_id'?: string;
    public body?: PluginDTO;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): CreatePluginDraftRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: PluginDTO): CreatePluginDraftRequest {
        this['body'] = body;
        return this;
    }
}