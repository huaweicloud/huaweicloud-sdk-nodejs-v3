

export class WorkloadPlanReq {
    private 'plan_name'?: string;
    private 'logical_cluster_name'?: string;
    public constructor(planName?: string) { 
        this['plan_name'] = planName;
    }
    public withPlanName(planName: string): WorkloadPlanReq {
        this['plan_name'] = planName;
        return this;
    }
    public set planName(planName: string  | undefined) {
        this['plan_name'] = planName;
    }
    public get planName(): string | undefined {
        return this['plan_name'];
    }
    public withLogicalClusterName(logicalClusterName: string): WorkloadPlanReq {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
}