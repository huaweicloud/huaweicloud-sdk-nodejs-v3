import { PluginTemplateVersionV2 } from './PluginTemplateVersionV2';


export class PluginTemplateSpecV2 {
    public optional?: boolean;
    public type?: PluginTemplateSpecV2TypeEnum | string;
    public logoURL?: string;
    public description?: string;
    public versions?: Array<PluginTemplateVersionV2>;
    public constructor(optional?: boolean, versions?: Array<PluginTemplateVersionV2>) { 
        this['optional'] = optional;
        this['versions'] = versions;
    }
    public withOptional(optional: boolean): PluginTemplateSpecV2 {
        this['optional'] = optional;
        return this;
    }
    public withType(type: PluginTemplateSpecV2TypeEnum | string): PluginTemplateSpecV2 {
        this['type'] = type;
        return this;
    }
    public withLogoURL(logoURL: string): PluginTemplateSpecV2 {
        this['logoURL'] = logoURL;
        return this;
    }
    public withDescription(description: string): PluginTemplateSpecV2 {
        this['description'] = description;
        return this;
    }
    public withVersions(versions: Array<PluginTemplateVersionV2>): PluginTemplateSpecV2 {
        this['versions'] = versions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PluginTemplateSpecV2TypeEnum {
    HELM = 'helm',
    CCEPLUGIN = ' ccePlugin'
}
