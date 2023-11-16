import { PluginPartQueryDTO } from './PluginPartQueryDTO';


export class ShowPluginInputsRequest {
    private 'domain_id'?: string;
    public body?: Array<PluginPartQueryDTO>;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ShowPluginInputsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: Array<PluginPartQueryDTO>): ShowPluginInputsRequest {
        this['body'] = body;
        return this;
    }
}