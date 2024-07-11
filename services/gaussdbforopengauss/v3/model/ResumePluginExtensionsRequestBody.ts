

export class ResumePluginExtensionsRequestBody {
    private 'plugin_name'?: string;
    private 'db_list'?: Array<string>;
    private 'extension_name'?: string;
    private 'extension_action'?: string;
    public constructor(pluginName?: string, dbList?: Array<string>, extensionName?: string, extensionAction?: string) { 
        this['plugin_name'] = pluginName;
        this['db_list'] = dbList;
        this['extension_name'] = extensionName;
        this['extension_action'] = extensionAction;
    }
    public withPluginName(pluginName: string): ResumePluginExtensionsRequestBody {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withDbList(dbList: Array<string>): ResumePluginExtensionsRequestBody {
        this['db_list'] = dbList;
        return this;
    }
    public set dbList(dbList: Array<string>  | undefined) {
        this['db_list'] = dbList;
    }
    public get dbList(): Array<string> | undefined {
        return this['db_list'];
    }
    public withExtensionName(extensionName: string): ResumePluginExtensionsRequestBody {
        this['extension_name'] = extensionName;
        return this;
    }
    public set extensionName(extensionName: string  | undefined) {
        this['extension_name'] = extensionName;
    }
    public get extensionName(): string | undefined {
        return this['extension_name'];
    }
    public withExtensionAction(extensionAction: string): ResumePluginExtensionsRequestBody {
        this['extension_action'] = extensionAction;
        return this;
    }
    public set extensionAction(extensionAction: string  | undefined) {
        this['extension_action'] = extensionAction;
    }
    public get extensionAction(): string | undefined {
        return this['extension_action'];
    }
}