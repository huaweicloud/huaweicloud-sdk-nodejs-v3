import { NodePoolMetadata } from './NodePoolMetadata';
import { NodePoolUpgradeSpec } from './NodePoolUpgradeSpec';


export class UpgradeNodePool {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: NodePoolMetadata;
    public spec?: NodePoolUpgradeSpec;
    public constructor(spec?: NodePoolUpgradeSpec) { 
        this['spec'] = spec;
    }
    public withKind(kind: string): UpgradeNodePool {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UpgradeNodePool {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: NodePoolMetadata): UpgradeNodePool {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodePoolUpgradeSpec): UpgradeNodePool {
        this['spec'] = spec;
        return this;
    }
}