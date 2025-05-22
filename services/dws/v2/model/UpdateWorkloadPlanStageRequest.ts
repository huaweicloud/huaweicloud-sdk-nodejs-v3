import { WorkloadPlanStageReq } from './WorkloadPlanStageReq';


export class UpdateWorkloadPlanStageRequest {
    private 'cluster_id'?: string;
    private 'plan_id'?: string;
    private 'stage_id'?: string;
    public body?: WorkloadPlanStageReq;
    public constructor(clusterId?: string, planId?: string, stageId?: string) { 
        this['cluster_id'] = clusterId;
        this['plan_id'] = planId;
        this['stage_id'] = stageId;
    }
    public withClusterId(clusterId: string): UpdateWorkloadPlanStageRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withPlanId(planId: string): UpdateWorkloadPlanStageRequest {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withStageId(stageId: string): UpdateWorkloadPlanStageRequest {
        this['stage_id'] = stageId;
        return this;
    }
    public set stageId(stageId: string  | undefined) {
        this['stage_id'] = stageId;
    }
    public get stageId(): string | undefined {
        return this['stage_id'];
    }
    public withBody(body: WorkloadPlanStageReq): UpdateWorkloadPlanStageRequest {
        this['body'] = body;
        return this;
    }
}