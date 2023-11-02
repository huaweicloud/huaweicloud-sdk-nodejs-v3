import { PlanStage } from './PlanStage';


export class WorkloadPlanInfo {
    public status?: string;
    private 'project_id'?: string;
    private 'cluster_id'?: string;
    private 'plan_id'?: string;
    private 'plan_name'?: string;
    private 'current_stage'?: string;
    private 'logical_cluster_name'?: string;
    private 'stage_list'?: Array<PlanStage>;
    public constructor(projectId?: string, clusterId?: string, planId?: string, planName?: string) { 
        this['project_id'] = projectId;
        this['cluster_id'] = clusterId;
        this['plan_id'] = planId;
        this['plan_name'] = planName;
    }
    public withStatus(status: string): WorkloadPlanInfo {
        this['status'] = status;
        return this;
    }
    public withProjectId(projectId: string): WorkloadPlanInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withClusterId(clusterId: string): WorkloadPlanInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withPlanId(planId: string): WorkloadPlanInfo {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withPlanName(planName: string): WorkloadPlanInfo {
        this['plan_name'] = planName;
        return this;
    }
    public set planName(planName: string  | undefined) {
        this['plan_name'] = planName;
    }
    public get planName(): string | undefined {
        return this['plan_name'];
    }
    public withCurrentStage(currentStage: string): WorkloadPlanInfo {
        this['current_stage'] = currentStage;
        return this;
    }
    public set currentStage(currentStage: string  | undefined) {
        this['current_stage'] = currentStage;
    }
    public get currentStage(): string | undefined {
        return this['current_stage'];
    }
    public withLogicalClusterName(logicalClusterName: string): WorkloadPlanInfo {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
    public withStageList(stageList: Array<PlanStage>): WorkloadPlanInfo {
        this['stage_list'] = stageList;
        return this;
    }
    public set stageList(stageList: Array<PlanStage>  | undefined) {
        this['stage_list'] = stageList;
    }
    public get stageList(): Array<PlanStage> | undefined {
        return this['stage_list'];
    }
}