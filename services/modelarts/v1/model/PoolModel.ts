import { PoolMetadata } from './PoolMetadata';
import { PoolSpecModel } from './PoolSpecModel';
import { PoolStatus } from './PoolStatus';


export class PoolModel {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PoolMetadata;
    public spec?: PoolSpecModel;
    public status?: PoolStatus;
    public constructor(apiVersion?: string, kind?: string, metadata?: PoolMetadata, spec?: PoolSpecModel, status?: PoolStatus) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
        this['status'] = status;
    }
    public withApiVersion(apiVersion: string): PoolModel {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): PoolModel {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PoolMetadata): PoolModel {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PoolSpecModel): PoolModel {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PoolStatus): PoolModel {
        this['status'] = status;
        return this;
    }
}