import { ObjectMeta } from './ObjectMeta';
import { UCSTaskSpec } from './UCSTaskSpec';
import { UCSTaskStatus } from './UCSTaskStatus';


export class UCSTask {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: UCSTaskSpec;
    public status?: UCSTaskStatus;
    public constructor() { 
    }
    public withKind(kind: string): UCSTask {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UCSTask {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): UCSTask {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UCSTaskSpec): UCSTask {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: UCSTaskStatus): UCSTask {
        this['status'] = status;
        return this;
    }
}