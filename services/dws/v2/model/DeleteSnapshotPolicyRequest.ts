

export class DeleteSnapshotPolicyRequest {
    private 'cluster_id': string | undefined;
    public id: string;
    public constructor(clusterId?: any, id?: any) { 
        this['cluster_id'] = clusterId;
        this['id'] = id;
    }
    public withClusterId(clusterId: string): DeleteSnapshotPolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withId(id: string): DeleteSnapshotPolicyRequest {
        this['id'] = id;
        return this;
    }
}