import { WorkloadQueueReq } from './WorkloadQueueReq';


export class AddWorkloadQueueRequest {
    private 'cluster_id': string | undefined;
    public body?: WorkloadQueueReq;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): AddWorkloadQueueRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: WorkloadQueueReq): AddWorkloadQueueRequest {
        this['body'] = body;
        return this;
    }
}