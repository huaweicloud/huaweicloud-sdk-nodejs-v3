import { ObjectMeta } from './ObjectMeta';
import { UCSJobSpec } from './UCSJobSpec';
import { UCSJobStatus } from './UCSJobStatus';


export class UCSJob {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: UCSJobSpec;
    public status?: UCSJobStatus;
    public constructor() { 
    }
    public withKind(kind: string): UCSJob {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UCSJob {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): UCSJob {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UCSJobSpec): UCSJob {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: UCSJobStatus): UCSJob {
        this['status'] = status;
        return this;
    }
}