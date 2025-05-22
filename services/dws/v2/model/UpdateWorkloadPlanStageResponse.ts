import { PlanStage } from './PlanStage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateWorkloadPlanStageResponse extends SdkResponse {
    private 'workload_res_code'?: number;
    private 'workload_res_str'?: string;
    private 'workload_plan_stage'?: PlanStage;
    public constructor() { 
        super();
    }
    public withWorkloadResCode(workloadResCode: number): UpdateWorkloadPlanStageResponse {
        this['workload_res_code'] = workloadResCode;
        return this;
    }
    public set workloadResCode(workloadResCode: number  | undefined) {
        this['workload_res_code'] = workloadResCode;
    }
    public get workloadResCode(): number | undefined {
        return this['workload_res_code'];
    }
    public withWorkloadResStr(workloadResStr: string): UpdateWorkloadPlanStageResponse {
        this['workload_res_str'] = workloadResStr;
        return this;
    }
    public set workloadResStr(workloadResStr: string  | undefined) {
        this['workload_res_str'] = workloadResStr;
    }
    public get workloadResStr(): string | undefined {
        return this['workload_res_str'];
    }
    public withWorkloadPlanStage(workloadPlanStage: PlanStage): UpdateWorkloadPlanStageResponse {
        this['workload_plan_stage'] = workloadPlanStage;
        return this;
    }
    public set workloadPlanStage(workloadPlanStage: PlanStage  | undefined) {
        this['workload_plan_stage'] = workloadPlanStage;
    }
    public get workloadPlanStage(): PlanStage | undefined {
        return this['workload_plan_stage'];
    }
}