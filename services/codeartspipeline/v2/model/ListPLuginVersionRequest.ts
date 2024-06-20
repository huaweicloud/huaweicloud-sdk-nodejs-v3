

export class ListPLuginVersionRequest {
    private 'domain_id'?: string;
    private 'plugin_name'?: string;
    public offset?: string;
    public limit?: string;
    public constructor(domainId?: string, pluginName?: string, offset?: string, limit?: string) { 
        this['domain_id'] = domainId;
        this['plugin_name'] = pluginName;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withDomainId(domainId: string): ListPLuginVersionRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPluginName(pluginName: string): ListPLuginVersionRequest {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withOffset(offset: string): ListPLuginVersionRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListPLuginVersionRequest {
        this['limit'] = limit;
        return this;
    }
}