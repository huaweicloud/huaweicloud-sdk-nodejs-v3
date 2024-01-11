

export class ListPlanExecLogsRequest {
    private 'cluster_id'?: string;
    private 'plan_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(clusterId?: string, planId?: string) { 
        this['cluster_id'] = clusterId;
        this['plan_id'] = planId;
    }
    public withClusterId(clusterId: string): ListPlanExecLogsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withPlanId(planId: string): ListPlanExecLogsRequest {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withLimit(limit: number): ListPlanExecLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPlanExecLogsRequest {
        this['offset'] = offset;
        return this;
    }
}