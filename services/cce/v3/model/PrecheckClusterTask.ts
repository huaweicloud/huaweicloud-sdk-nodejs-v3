import { PrecheckSpec } from './PrecheckSpec';
import { PrecheckStatus } from './PrecheckStatus';
import { PrecheckTaskMetadata } from './PrecheckTaskMetadata';


export class PrecheckClusterTask {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PrecheckTaskMetadata;
    public spec?: PrecheckSpec;
    public status?: PrecheckStatus;
    public constructor() { 
    }
    public withApiVersion(apiVersion: string): PrecheckClusterTask {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): PrecheckClusterTask {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PrecheckTaskMetadata): PrecheckClusterTask {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PrecheckSpec): PrecheckClusterTask {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PrecheckStatus): PrecheckClusterTask {
        this['status'] = status;
        return this;
    }
}