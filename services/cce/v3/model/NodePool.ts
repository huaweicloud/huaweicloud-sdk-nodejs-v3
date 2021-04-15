import { NodePoolMetadata } from './NodePoolMetadata';
import { NodePoolSpec } from './NodePoolSpec';
import { NodePoolStatus } from './NodePoolStatus';


export class NodePool {
    public apiVersion: string;
    public kind: string;
    public metadata: NodePoolMetadata;
    public spec: NodePoolSpec;
    public status?: NodePoolStatus;
    public constructor(apiVersion?: any, kind?: any, metadata?: any, spec?: any) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): NodePool {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): NodePool {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NodePoolMetadata): NodePool {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodePoolSpec): NodePool {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NodePoolStatus): NodePool {
        this['status'] = status;
        return this;
    }
}