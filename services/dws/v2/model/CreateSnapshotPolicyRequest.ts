import { BackupPolicy } from './BackupPolicy';


export class CreateSnapshotPolicyRequest {
    private 'cluster_id': string | undefined;
    public body?: BackupPolicy;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateSnapshotPolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: BackupPolicy): CreateSnapshotPolicyRequest {
        this['body'] = body;
        return this;
    }
}