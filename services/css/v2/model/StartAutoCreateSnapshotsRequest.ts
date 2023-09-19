import { StartAutoCreateSnapshotsReq } from './StartAutoCreateSnapshotsReq';


export class StartAutoCreateSnapshotsRequest {
    private 'cluster_id'?: string;
    public body?: StartAutoCreateSnapshotsReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): StartAutoCreateSnapshotsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: StartAutoCreateSnapshotsReq): StartAutoCreateSnapshotsRequest {
        this['body'] = body;
        return this;
    }
}