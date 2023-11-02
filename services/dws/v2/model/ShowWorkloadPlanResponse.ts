import { WorkloadPlanInfo } from './WorkloadPlanInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkloadPlanResponse extends SdkResponse {
    private 'workload_res_code'?: number;
    private 'workload_res_str'?: string;
    private 'workload_plan'?: WorkloadPlanInfo;
    public constructor() { 
        super();
    }
    public withWorkloadResCode(workloadResCode: number): ShowWorkloadPlanResponse {
        this['workload_res_code'] = workloadResCode;
        return this;
    }
    public set workloadResCode(workloadResCode: number  | undefined) {
        this['workload_res_code'] = workloadResCode;
    }
    public get workloadResCode(): number | undefined {
        return this['workload_res_code'];
    }
    public withWorkloadResStr(workloadResStr: string): ShowWorkloadPlanResponse {
        this['workload_res_str'] = workloadResStr;
        return this;
    }
    public set workloadResStr(workloadResStr: string  | undefined) {
        this['workload_res_str'] = workloadResStr;
    }
    public get workloadResStr(): string | undefined {
        return this['workload_res_str'];
    }
    public withWorkloadPlan(workloadPlan: WorkloadPlanInfo): ShowWorkloadPlanResponse {
        this['workload_plan'] = workloadPlan;
        return this;
    }
    public set workloadPlan(workloadPlan: WorkloadPlanInfo  | undefined) {
        this['workload_plan'] = workloadPlan;
    }
    public get workloadPlan(): WorkloadPlanInfo | undefined {
        return this['workload_plan'];
    }
}