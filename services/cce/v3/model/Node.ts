import { NodeMetadata } from './NodeMetadata';
import { NodeSpec } from './NodeSpec';
import { NodeStatus } from './NodeStatus';


export class Node {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: NodeMetadata;
    public spec?: NodeSpec;
    public status?: NodeStatus;
    public constructor() { 
    }
    public withKind(kind: string): Node {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): Node {
        this['apiVersion'] = apiVersion;
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