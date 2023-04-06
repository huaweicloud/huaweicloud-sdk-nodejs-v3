
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateWorkloadPlanResponse extends SdkResponse {
    private 'workload_res_code'?: number | undefined;
    private 'workload_res_str'?: string | undefined;
    public constructor() { 
        super();
    }
    public withWorkloadResCode(workloadResCode: number): CreateWorkloadPlanResponse {
        this['workload_res_code'] = workloadResCode;
        return this;
    }
    public set workloadResCode(workloadResCode: number | undefined) {
        this['workload_res_code'] = workloadResCode;
    }
    public get workloadResCode() {
        return this['workload_res_code'];
    }
    public withWorkloadResStr(workloadResStr: string): CreateWorkloadPlanResponse {
        this['workload_res_str'] = workloadResStr;
        return this;
    }
    public set workloadResStr(workloadResStr: string | undefined) {
        this['workload_res_str'] = workloadResStr;
    }
    public get workloadResStr() {
        return this['workload_res_str'];
    }
}