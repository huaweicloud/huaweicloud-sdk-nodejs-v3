import { WorkloadPlanInfo } from './WorkloadPlanInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkloadPlansResponse extends SdkResponse {
    private 'workload_res_code'?: number;
    private 'workload_res_str'?: string;
    private 'plan_list'?: Array<WorkloadPlanInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withWorkloadResCode(workloadResCode: number): ListWorkloadPlansResponse {
        this['workload_res_code'] = workloadResCode;
        return this;
    }
    public set workloadResCode(workloadResCode: number  | undefined) {
        this['workload_res_code'] = workloadResCode;
    }
    public get workloadResCode(): number | undefined {
        return this['workload_res_code'];
    }
    public withWorkloadResStr(workloadResStr: string): ListWorkloadPlansResponse {
        this['workload_res_str'] = workloadResStr;
        return this;
    }
    public set workloadResStr(workloadResStr: string  | undefined) {
        this['workload_res_str'] = workloadResStr;
    }
    public get workloadResStr(): string | undefined {
        return this['workload_res_str'];
    }
    public withPlanList(planList: Array<WorkloadPlanInfo>): ListWorkloadPlansResponse {
        this['plan_list'] = planList;
        return this;
    }
    public set planList(planList: Array<WorkloadPlanInfo>  | undefined) {
        this['plan_list'] = planList;
    }
    public get planList(): Array<WorkloadPlanInfo> | undefined {
        return this['plan_list'];
    }
    public withCount(count: number): ListWorkloadPlansResponse {
        this['count'] = count;
        return this;
    }
}