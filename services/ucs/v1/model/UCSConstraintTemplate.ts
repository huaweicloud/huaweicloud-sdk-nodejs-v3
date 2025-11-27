import { ObjectMeta } from './ObjectMeta';


export class UCSConstraintTemplate {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: object;
    public constructor() { 
    }
    public withKind(kind: string): UCSConstraintTemplate {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UCSConstraintTemplate {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): UCSConstraintTemplate {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: object): UCSConstraintTemplate {
        this['spec'] = spec;
        return this;
    }
}