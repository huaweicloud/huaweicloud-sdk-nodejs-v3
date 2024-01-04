import { PostcheckSpec } from './PostcheckSpec';


export class PostcheckClusterRequestBody {
    public apiVersion?: string;
    public kind?: string;
    public spec?: PostcheckSpec;
    public constructor(apiVersion?: string, kind?: string, spec?: PostcheckSpec) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): PostcheckClusterRequestBody {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): PostcheckClusterRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: PostcheckSpec): PostcheckClusterRequestBody {
        this['spec'] = spec;
        return this;
    }
}