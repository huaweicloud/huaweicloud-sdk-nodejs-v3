import { WorkloadPlanStageReqWorkloadPlanStage } from './WorkloadPlanStageReqWorkloadPlanStage';


export class WorkloadPlanStageReq {
    private 'workload_plan_stage'?: WorkloadPlanStageReqWorkloadPlanStage;
    public constructor() { 
    }
    public withWorkloadPlanStage(workloadPlanStage: WorkloadPlanStageReqWorkloadPlanStage): WorkloadPlanStageReq {
        this['workload_plan_stage'] = workloadPlanStage;
        return this;
    }
    public set workloadPlanStage(workloadPlanStage: WorkloadPlanStageReqWorkloadPlanStage  | undefined) {
        this['workload_plan_stage'] = workloadPlanStage;
    }
    public get workloadPlanStage(): WorkloadPlanStageReqWorkloadPlanStage | undefined {
        return this['workload_plan_stage'];
    }
}