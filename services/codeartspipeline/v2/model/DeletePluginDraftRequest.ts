

export class DeletePluginDraftRequest {
    private 'domain_id'?: string;
    private 'plugin_name'?: string;
    public version?: string;
    public constructor(domainId?: string, pluginName?: string, version?: string) { 
        this['domain_id'] = domainId;
        this['plugin_name'] = pluginName;
        this['version'] = version;
    }
    public withDomainId(domainId: string): DeletePluginDraftRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPluginName(pluginName: string): DeletePluginDraftRequest {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withVersion(version: string): DeletePluginDraftRequest {
        this['version'] = version;
        return this;
    }
}