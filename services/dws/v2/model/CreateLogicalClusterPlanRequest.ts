import { LogicalClusterPlanBo } from './LogicalClusterPlanBo';


export class CreateLogicalClusterPlanRequest {
    private 'cluster_id'?: string;
    public body?: LogicalClusterPlanBo;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateLogicalClusterPlanRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: LogicalClusterPlanBo): CreateLogicalClusterPlanRequest {
        this['body'] = body;
        return this;
    }
}