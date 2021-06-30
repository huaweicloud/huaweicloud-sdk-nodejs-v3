import { NodeMetadata } from './NodeMetadata';
import { V3NodeSpec } from './V3NodeSpec';
import { V3NodeStatus } from './V3NodeStatus';


export class V3Node {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: NodeMetadata;
    public spec?: V3NodeSpec;
    public status?: V3NodeStatus;
    public constructor() { 
    }
    public withKind(kind: string): V3Node {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): V3Node {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: NodeMetadata): V3Node {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: V3NodeSpec): V3Node {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: V3NodeStatus): V3Node {
        this['status'] = status;
        return this;
    }
}