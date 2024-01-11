import { PlanLog } from './PlanLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPlanExecLogsResponse extends SdkResponse {
    private 'workload_res_code'?: number;
    private 'workload_res_str'?: string;
    private 'plan_logs'?: Array<PlanLog>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withWorkloadResCode(workloadResCode: number): ListPlanExecLogsResponse {
        this['workload_res_code'] = workloadResCode;
        return this;
    }
    public set workloadResCode(workloadResCode: number  | undefined) {
        this['workload_res_code'] = workloadResCode;
    }
    public get workloadResCode(): number | undefined {
        return this['workload_res_code'];
    }
    public withWorkloadResStr(workloadResStr: string): ListPlanExecLogsResponse {
        this['workload_res_str'] = workloadResStr;
        return this;
    }
    public set workloadResStr(workloadResStr: string  | undefined) {
        this['workload_res_str'] = workloadResStr;
    }
    public get workloadResStr(): string | undefined {
        return this['workload_res_str'];
    }
    public withPlanLogs(planLogs: Array<PlanLog>): ListPlanExecLogsResponse {
        this['plan_logs'] = planLogs;
        return this;
    }
    public set planLogs(planLogs: Array<PlanLog>  | undefined) {
        this['plan_logs'] = planLogs;
    }
    public get planLogs(): Array<PlanLog> | undefined {
        return this['plan_logs'];
    }
    public withCount(count: number): ListPlanExecLogsResponse {
        this['count'] = count;
        return this;
    }
}