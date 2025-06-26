
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateWorkloadRuleResponse extends SdkResponse {
    private 'workload_res_code'?: number;
    private 'workload_res_str'?: string;
    public constructor() { 
        super();
    }
    public withWorkloadResCode(workloadResCode: number): UpdateWorkloadRuleResponse {
        this['workload_res_code'] = workloadResCode;
        return this;
    }
    public set workloadResCode(workloadResCode: number  | undefined) {
        this['workload_res_code'] = workloadResCode;
    }
    public get workloadResCode(): number | undefined {
        return this['workload_res_code'];
    }
    public withWorkloadResStr(workloadResStr: string): UpdateWorkloadRuleResponse {
        this['workload_res_str'] = workloadResStr;
        return this;
    }
    public set workloadResStr(workloadResStr: string  | undefined) {
        this['workload_res_str'] = workloadResStr;
    }
    public get workloadResStr(): string | undefined {
        return this['workload_res_str'];
    }
}