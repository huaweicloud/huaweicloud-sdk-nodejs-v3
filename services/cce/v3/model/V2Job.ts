import { V2JobSpec } from './V2JobSpec';
import { V2JobStatus } from './V2JobStatus';
import { V2JobTypeObject } from './V2JobTypeObject';


export class V2Job {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: V2JobTypeObject;
    public spec?: V2JobSpec;
    public status?: V2JobStatus;
    public constructor() { 
    }
    public withKind(kind: string): V2Job {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): V2Job {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: V2JobTypeObject): V2Job {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: V2JobSpec): V2Job {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: V2JobStatus): V2Job {
        this['status'] = status;
        return this;
    }
}