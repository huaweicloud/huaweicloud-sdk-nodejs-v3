import { BackupPolicy } from './BackupPolicy';


export class CreateSnapshotPolicyRequest {
    private 'cluster_id'?: string;
    public body?: BackupPolicy;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateSnapshotPolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: BackupPolicy): CreateSnapshotPolicyRequest {
        this['body'] = body;
        return this;
    }
}