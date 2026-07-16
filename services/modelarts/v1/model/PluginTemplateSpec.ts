import { PluginTemplateVersionV2 } from './PluginTemplateVersionV2';


export class PluginTemplateSpec {
    public type?: string;
    public description?: string;
    public versions?: { [key: string]: PluginTemplateVersionV2; };
    public constructor(type?: string, description?: string, versions?: { [key: string]: PluginTemplateVersionV2; }) { 
        this['type'] = type;
        this['description'] = description;
        this['versions'] = versions;
    }
    public withType(type: string): PluginTemplateSpec {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): PluginTemplateSpec {
        this['description'] = description;
        return this;
    }
    public withVersions(versions: { [key: string]: PluginTemplateVersionV2; }): PluginTemplateSpec {
        this['versions'] = versions;
        return this;
    }
}