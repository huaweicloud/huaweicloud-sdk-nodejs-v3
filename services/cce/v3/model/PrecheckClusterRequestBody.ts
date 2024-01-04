import { PrecheckSpec } from './PrecheckSpec';


export class PrecheckClusterRequestBody {
    public apiVersion?: string;
    public kind?: string;
    public spec?: PrecheckSpec;
    public constructor(apiVersion?: string, kind?: string, spec?: PrecheckSpec) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): PrecheckClusterRequestBody {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): PrecheckClusterRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: PrecheckSpec): PrecheckClusterRequestBody {
        this['spec'] = spec;
        return this;
    }
}