import { PluginSpec } from './PluginSpec';


export class CreatePluginRequestBody {
    public apiVersion?: string;
    public kind?: string;
    public spec?: PluginSpec;
    public constructor(apiVersion?: string, kind?: string, spec?: PluginSpec) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): CreatePluginRequestBody {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): CreatePluginRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: PluginSpec): CreatePluginRequestBody {
        this['spec'] = spec;
        return this;
    }
}