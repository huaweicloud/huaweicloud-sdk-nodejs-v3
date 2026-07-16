import { PluginTemplateMetadata } from './PluginTemplateMetadata';
import { PluginTemplateSpecV2 } from './PluginTemplateSpecV2';


export class PluginTemplateV2 {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PluginTemplateMetadata;
    public spec?: PluginTemplateSpecV2;
    public constructor(apiVersion?: string, kind?: string, metadata?: PluginTemplateMetadata, spec?: PluginTemplateSpecV2) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): PluginTemplateV2 {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): PluginTemplateV2 {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PluginTemplateMetadata): PluginTemplateV2 {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PluginTemplateSpecV2): PluginTemplateV2 {
        this['spec'] = spec;
        return this;
    }
}