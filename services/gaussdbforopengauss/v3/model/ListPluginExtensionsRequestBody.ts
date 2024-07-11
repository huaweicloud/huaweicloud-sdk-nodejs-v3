

export class ListPluginExtensionsRequestBody {
    private 'db_name'?: string;
    private 'plugin_name'?: string;
    public constructor(dbName?: string, pluginName?: string) { 
        this['db_name'] = dbName;
        this['plugin_name'] = pluginName;
    }
    public withDbName(dbName: string): ListPluginExtensionsRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withPluginName(pluginName: string): ListPluginExtensionsRequestBody {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
}