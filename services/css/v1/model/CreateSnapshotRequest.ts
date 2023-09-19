import { CreateSnapshotReq } from './CreateSnapshotReq';


export class CreateSnapshotRequest {
    private 'cluster_id'?: string;
    public body?: CreateSnapshotReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateSnapshotRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: CreateSnapshotReq): CreateSnapshotRequest {
        this['body'] = body;
        return this;
    }
}