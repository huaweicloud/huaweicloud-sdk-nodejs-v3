import { Metadata } from './Metadata';
import { Templatespec } from './Templatespec';


export class AddonTemplate {
    public apiVersion: string;
    public kind: string;
    public metadata: Metadata;
    public spec: Templatespec;
    public constructor(apiVersion?: any, kind?: any, metadata?: any, spec?: any) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): AddonTemplate {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): AddonTemplate {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: Metadata): AddonTemplate {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: Templatespec): AddonTemplate {
        this['spec'] = spec;
        return this;
    }
}