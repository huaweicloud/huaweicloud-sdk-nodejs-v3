import { ObjectMeta } from './ObjectMeta';
import { UCSConstraintSpec } from './UCSConstraintSpec';
import { UCSConstraintStatus } from './UCSConstraintStatus';


export class UCSConstraint {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: UCSConstraintSpec;
    public status?: UCSConstraintStatus;
    public constructor() { 
    }
    public withKind(kind: string): UCSConstraint {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UCSConstraint {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): UCSConstraint {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UCSConstraintSpec): UCSConstraint {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: UCSConstraintStatus): UCSConstraint {
        this['status'] = status;
        return this;
    }
}