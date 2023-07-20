import { WorkloadStatusReq } from './WorkloadStatusReq';


export class CreateClusterWorkloadRequest {
    private 'cluster_id'?: string;
    public body?: WorkloadStatusReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateClusterWorkloadRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: WorkloadStatusReq): CreateClusterWorkloadRequest {
        this['body'] = body;
        return this;
    }
}