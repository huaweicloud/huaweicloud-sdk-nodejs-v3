import { ClusterGroupSpec } from './ClusterGroupSpec';
import { ClusterGroupStatus } from './ClusterGroupStatus';
import { ObjectMeta } from './ObjectMeta';


export class ClusterGroup {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: ClusterGroupSpec;
    public status?: ClusterGroupStatus;
    public constructor() { 
    }
    public withKind(kind: string): ClusterGroup {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ClusterGroup {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): ClusterGroup {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ClusterGroupSpec): ClusterGroup {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: ClusterGroupStatus): ClusterGroup {
        this['status'] = status;
        return this;
    }
}