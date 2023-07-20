import { ScalingPolicyExecuteLogList } from './ScalingPolicyExecuteLogList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScalingPolicyExecuteLogsResponse extends SdkResponse {
    private 'total_number'?: number;
    private 'start_number'?: number;
    public limit?: number;
    private 'scaling_policy_execute_log'?: Array<ScalingPolicyExecuteLogList>;
    public constructor() { 
        super();
    }
    public withTotalNumber(totalNumber: number): ListScalingPolicyExecuteLogsResponse {
        this['total_number'] = totalNumber;
        return this;
    }
    public set totalNumber(totalNumber: number  | undefined) {
        this['total_number'] = totalNumber;
    }
    public get totalNumber(): number | undefined {
        return this['total_number'];
    }
    public withStartNumber(startNumber: number): ListScalingPolicyExecuteLogsResponse {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListScalingPolicyExecuteLogsResponse {
        this['limit'] = limit;
        return this;
    }
    public withScalingPolicyExecuteLog(scalingPolicyExecuteLog: Array<ScalingPolicyExecuteLogList>): ListScalingPolicyExecuteLogsResponse {
        this['scaling_policy_execute_log'] = scalingPolicyExecuteLog;
        return this;
    }
    public set scalingPolicyExecuteLog(scalingPolicyExecuteLog: Array<ScalingPolicyExecuteLogList>  | undefined) {
        this['scaling_policy_execute_log'] = scalingPolicyExecuteLog;
    }
    public get scalingPolicyExecuteLog(): Array<ScalingPolicyExecuteLogList> | undefined {
        return this['scaling_policy_execute_log'];
    }
}