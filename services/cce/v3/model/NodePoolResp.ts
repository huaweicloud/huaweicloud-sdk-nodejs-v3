import { NodePoolMetadata } from './NodePoolMetadata';
import { NodePoolSpec } from './NodePoolSpec';
import { NodePoolStatus } from './NodePoolStatus';


export class NodePoolResp {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: NodePoolMetadata;
    public spec?: NodePoolSpec;
    public status?: NodePoolStatus;
    public constructor(kind?: string, apiVersion?: string, metadata?: NodePoolMetadata, spec?: NodePoolSpec) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withKind(kind: string): NodePoolResp {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): NodePoolResp {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: NodePoolMetadata): NodePoolResp {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodePoolSpec): NodePoolResp {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NodePoolStatus): NodePoolResp {
        this['status'] = status;
        return this;
    }
}