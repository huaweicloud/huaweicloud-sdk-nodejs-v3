

export class ListPluginVersionNumberRequest {
    private 'domain_id'?: string;
    private 'plugin_name'?: string;
    public offset?: string;
    public limit?: string;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ListPluginVersionNumberRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPluginName(pluginName: string): ListPluginVersionNumberRequest {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withOffset(offset: string): ListPluginVersionNumberRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListPluginVersionNumberRequest {
        this['limit'] = limit;
        return this;
    }
}