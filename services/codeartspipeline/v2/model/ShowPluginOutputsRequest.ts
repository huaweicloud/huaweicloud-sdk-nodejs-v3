import { PluginPartQueryDTO } from './PluginPartQueryDTO';


export class ShowPluginOutputsRequest {
    private 'domain_id'?: string;
    public body?: Array<PluginPartQueryDTO>;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ShowPluginOutputsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: Array<PluginPartQueryDTO>): ShowPluginOutputsRequest {
        this['body'] = body;
        return this;
    }
}