

export class DeleteLogicalClusterPlanRequest {
    private 'cluster_id'?: string;
    private 'plan_id'?: string;
    public constructor(clusterId?: string, planId?: string) { 
        this['cluster_id'] = clusterId;
        this['plan_id'] = planId;
    }
    public withClusterId(clusterId: string): DeleteLogicalClusterPlanRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withPlanId(planId: string): DeleteLogicalClusterPlanRequest {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
}