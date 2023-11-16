import { AgentPluginInfoQueryDTO } from './AgentPluginInfoQueryDTO';


export class ListPluginsRequest {
    private 'domain_id'?: string;
    public offset?: string;
    public limit?: string;
    public body?: AgentPluginInfoQueryDTO;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ListPluginsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withOffset(offset: string): ListPluginsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListPluginsRequest {
        this['limit'] = limit;
        return this;
    }
    public withBody(body: AgentPluginInfoQueryDTO): ListPluginsRequest {
        this['body'] = body;
        return this;
    }
}