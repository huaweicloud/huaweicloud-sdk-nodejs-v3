import { ClusterMetadata } from './ClusterMetadata';
import { ClusterSpec } from './ClusterSpec';


export class Cluster {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ClusterMetadata;
    public spec?: ClusterSpec;
    public constructor(kind?: string, apiVersion?: string, metadata?: ClusterMetadata, spec?: ClusterSpec) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withKind(kind: string): Cluster {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): Cluster {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ClusterMetadata): Cluster {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ClusterSpec): Cluster {
        this['spec'] = spec;
        return this;
    }
}