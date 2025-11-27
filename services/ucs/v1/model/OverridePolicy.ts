import { OverrideSpec } from './OverrideSpec';


export class OverridePolicy {
    public kind?: string;
    public apiVersion?: string;
    public spec?: OverrideSpec;
    public constructor() { 
    }
    public withKind(kind: string): OverridePolicy {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): OverridePolicy {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withSpec(spec: OverrideSpec): OverridePolicy {
        this['spec'] = spec;
        return this;
    }
}