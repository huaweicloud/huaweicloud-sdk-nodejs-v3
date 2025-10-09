import { NodePoolMetadata } from './NodePoolMetadata';
import { NodePoolSpec } from './NodePoolSpec';


export class NodePool {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: NodePoolMetadata;
    public spec?: NodePoolSpec;
    public constructor(kind?: string, apiVersion?: string, metadata?: NodePoolMetadata, spec?: NodePoolSpec) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withKind(kind: string): NodePool {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): NodePool {
        this['apiVersion'] = apiVersion;
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
}