import { HyperNodeMetadata } from './HyperNodeMetadata';
import { HyperNodeSpec } from './HyperNodeSpec';
import { HyperNodeStatus } from './HyperNodeStatus';


export class HyperNode {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: HyperNodeMetadata;
    public spec?: HyperNodeSpec;
    public status?: HyperNodeStatus;
    public constructor() { 
    }
    public withApiVersion(apiVersion: string): HyperNode {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): HyperNode {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: HyperNodeMetadata): HyperNode {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: HyperNodeSpec): HyperNode {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: HyperNodeStatus): HyperNode {
        this['status'] = status;
        return this;
    }
}