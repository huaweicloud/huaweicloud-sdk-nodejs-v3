import { ClusterMetadata } from './ClusterMetadata';
import { ClusterStatus } from './ClusterStatus';
import { V3ClusterSpec } from './V3ClusterSpec';


export class V3Cluster {
    public apiVersion: string;
    public kind: string;
    public metadata: ClusterMetadata;
    public spec: V3ClusterSpec;
    public status?: ClusterStatus;
    public constructor(apiVersion?: any, kind?: any, metadata?: any, spec?: any) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): V3Cluster {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): V3Cluster {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: ClusterMetadata): V3Cluster {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: V3ClusterSpec): V3Cluster {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: ClusterStatus): V3Cluster {
        this['status'] = status;
        return this;
    }
}