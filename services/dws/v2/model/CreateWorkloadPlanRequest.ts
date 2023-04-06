import { WorkloadPlanReq } from './WorkloadPlanReq';


export class CreateWorkloadPlanRequest {
    private 'cluster_id': string | undefined;
    public body?: WorkloadPlanReq;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateWorkloadPlanRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: WorkloadPlanReq): CreateWorkloadPlanRequest {
        this['body'] = body;
        return this;
    }
}