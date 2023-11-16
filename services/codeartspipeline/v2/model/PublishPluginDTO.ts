

export class PublishPluginDTO {
    private 'plugin_name'?: string;
    public version?: string;
    private 'publisher_unique_id'?: string;
    public constructor() { 
    }
    public withPluginName(pluginName: string): PublishPluginDTO {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withVersion(version: string): PublishPluginDTO {
        this['version'] = version;
        return this;
    }
    public withPublisherUniqueId(publisherUniqueId: string): PublishPluginDTO {
        this['publisher_unique_id'] = publisherUniqueId;
        return this;
    }
    public set publisherUniqueId(publisherUniqueId: string  | undefined) {
        this['publisher_unique_id'] = publisherUniqueId;
    }
    public get publisherUniqueId(): string | undefined {
        return this['publisher_unique_id'];
    }
}