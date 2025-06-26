import { ExceptRuleBo } from './ExceptRuleBo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteWorkloadRuleResponse extends SdkResponse {
    private 'workload_res_code'?: number;
    private 'workload_res_str'?: string;
    public items?: Array<ExceptRuleBo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withWorkloadResCode(workloadResCode: number): DeleteWorkloadRuleResponse {
        this['workload_res_code'] = workloadResCode;
        return this;
    }
    public set workloadResCode(workloadResCode: number  | undefined) {
        this['workload_res_code'] = workloadResCode;
    }
    public get workloadResCode(): number | undefined {
        return this['workload_res_code'];
    }
    public withWorkloadResStr(workloadResStr: string): DeleteWorkloadRuleResponse {
        this['workload_res_str'] = workloadResStr;
        return this;
    }
    public set workloadResStr(workloadResStr: string  | undefined) {
        this['workload_res_str'] = workloadResStr;
    }
    public get workloadResStr(): string | undefined {
        return this['workload_res_str'];
    }
    public withItems(items: Array<ExceptRuleBo>): DeleteWorkloadRuleResponse {
        this['items'] = items;
        return this;
    }
    public withCount(count: number): DeleteWorkloadRuleResponse {
        this['count'] = count;
        return this;
    }
}