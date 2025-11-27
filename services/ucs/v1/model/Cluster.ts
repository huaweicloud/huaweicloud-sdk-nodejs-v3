import { ClusterSpec } from './ClusterSpec';
import { ClusterStatus } from './ClusterStatus';
import { ObjectMeta } from './ObjectMeta';


export class Cluster {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: ClusterSpec;
    public status?: ClusterStatus;
    public constructor() { 
    }
    public withKind(kind: string): Cluster {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): Cluster {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): Cluster {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ClusterSpec): Cluster {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: ClusterStatus): Cluster {
        this['status'] = status;
        return this;
    }
}