import { PluginBasicDTO } from './PluginBasicDTO';


export class UpdateBasicPluginRequest {
    private 'domain_id'?: string;
    public body?: PluginBasicDTO;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UpdateBasicPluginRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: PluginBasicDTO): UpdateBasicPluginRequest {
        this['body'] = body;
        return this;
    }
}