import { AddonCheckSpec } from './AddonCheckSpec';


export class AddonCheckRequest {
    public kind?: string;
    public apiVersion?: string;
    public spec?: AddonCheckSpec;
    public constructor(kind?: string, apiVersion?: string, spec?: AddonCheckSpec) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['spec'] = spec;
    }
    public withKind(kind: string): AddonCheckRequest {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): AddonCheckRequest {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withSpec(spec: AddonCheckSpec): AddonCheckRequest {
        this['spec'] = spec;
        return this;
    }
}