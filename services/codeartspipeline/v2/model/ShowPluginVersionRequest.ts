

export class ShowPluginVersionRequest {
    private 'domain_id'?: string;
    private 'plugin_name'?: string;
    public version?: string;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ShowPluginVersionRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPluginName(pluginName: string): ShowPluginVersionRequest {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withVersion(version: string): ShowPluginVersionRequest {
        this['version'] = version;
        return this;
    }
}