

export class ShowPluginTemplateRequest {
    private 'plugintemplate_name'?: string;
    public constructor(plugintemplateName?: string) { 
        this['plugintemplate_name'] = plugintemplateName;
    }
    public withPlugintemplateName(plugintemplateName: string): ShowPluginTemplateRequest {
        this['plugintemplate_name'] = plugintemplateName;
        return this;
    }
    public set plugintemplateName(plugintemplateName: string  | undefined) {
        this['plugintemplate_name'] = plugintemplateName;
    }
    public get plugintemplateName(): string | undefined {
        return this['plugintemplate_name'];
    }
}