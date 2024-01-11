import { WorkloadPlanStageIdReq } from './WorkloadPlanStageIdReq';


export class SwitchPlanStageRequest {
    private 'cluster_id'?: string;
    private 'plan_id'?: string;
    public body?: WorkloadPlanStageIdReq;
    public constructor(clusterId?: string, planId?: string) { 
        this['cluster_id'] = clusterId;
        this['plan_id'] = planId;
    }
    public withClusterId(clusterId: string): SwitchPlanStageRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withPlanId(planId: string): SwitchPlanStageRequest {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withBody(body: WorkloadPlanStageIdReq): SwitchPlanStageRequest {
        this['body'] = body;
        return this;
    }
}