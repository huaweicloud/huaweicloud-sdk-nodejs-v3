

export class IndicatorInfo {
    private 'indicator_name'?: string;
    private 'plugin_name'?: string;
    private 'default_collect_rate'?: string;
    private 'support_datastore_version'?: string;
    public constructor() { 
    }
    public withIndicatorName(indicatorName: string): IndicatorInfo {
        this['indicator_name'] = indicatorName;
        return this;
    }
    public set indicatorName(indicatorName: string  | undefined) {
        this['indicator_name'] = indicatorName;
    }
    public get indicatorName(): string | undefined {
        return this['indicator_name'];
    }
    public withPluginName(pluginName: string): IndicatorInfo {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withDefaultCollectRate(defaultCollectRate: string): IndicatorInfo {
        this['default_collect_rate'] = defaultCollectRate;
        return this;
    }
    public set defaultCollectRate(defaultCollectRate: string  | undefined) {
        this['default_collect_rate'] = defaultCollectRate;
    }
    public get defaultCollectRate(): string | undefined {
        return this['default_collect_rate'];
    }
    public withSupportDatastoreVersion(supportDatastoreVersion: string): IndicatorInfo {
        this['support_datastore_version'] = supportDatastoreVersion;
        return this;
    }
    public set supportDatastoreVersion(supportDatastoreVersion: string  | undefined) {
        this['support_datastore_version'] = supportDatastoreVersion;
    }
    public get supportDatastoreVersion(): string | undefined {
        return this['support_datastore_version'];
    }
}