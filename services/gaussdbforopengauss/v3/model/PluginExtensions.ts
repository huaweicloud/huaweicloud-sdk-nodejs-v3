

export class PluginExtensions {
    private 'extension_name'?: string;
    public status?: string;
    public constructor() { 
    }
    public withExtensionName(extensionName: string): PluginExtensions {
        this['extension_name'] = extensionName;
        return this;
    }
    public set extensionName(extensionName: string  | undefined) {
        this['extension_name'] = extensionName;
    }
    public get extensionName(): string | undefined {
        return this['extension_name'];
    }
    public withStatus(status: string): PluginExtensions {
        this['status'] = status;
        return this;
    }
}