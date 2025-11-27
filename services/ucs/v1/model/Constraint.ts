import { ConstraintSpec } from './ConstraintSpec';
import { ObjectMeta } from './ObjectMeta';


export class Constraint {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: ConstraintSpec;
    public constructor() { 
    }
    public withKind(kind: string): Constraint {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): Constraint {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): Constraint {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ConstraintSpec): Constraint {
        this['spec'] = spec;
        return this;
    }
}