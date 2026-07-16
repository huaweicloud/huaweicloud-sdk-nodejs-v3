import { NodeMetadata } from './NodeMetadata';
import { NodeSpec } from './NodeSpec';
import { NodeStatus } from './NodeStatus';


export class Node {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NodeMetadata;
    public spec?: NodeSpec;
    public status?: NodeStatus;
    public constructor(apiVersion?: string, kind?: string, metadata?: NodeMetadata, spec?: NodeSpec, status?: NodeStatus) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
        this['status'] = status;
    }
    public withApiVersion(apiVersion: string): Node {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): Node {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NodeMetadata): Node {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodeSpec): Node {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NodeStatus): Node {
        this['status'] = status;
        return this;
    }
}