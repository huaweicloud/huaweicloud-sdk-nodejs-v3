import { AddonMetadata } from './AddonMetadata';
import { Templatespec } from './Templatespec';


export class AddonTemplate {
    public kind: string;
    public apiVersion: string;
    public metadata: AddonMetadata;
    public spec: Templatespec;
    public constructor(kind?: any, apiVersion?: any, metadata?: any, spec?: any) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withKind(kind: string): AddonTemplate {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): AddonTemplate {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: AddonMetadata): AddonTemplate {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: Templatespec): AddonTemplate {
        this['spec'] = spec;
        return this;
    }
}