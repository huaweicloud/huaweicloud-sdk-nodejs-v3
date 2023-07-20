import { ScalingActivityLogV2 } from './ScalingActivityLogV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScalingActivityV2LogsResponse extends SdkResponse {
    private 'total_number'?: number;
    private 'start_number'?: number;
    public limit?: number;
    private 'scaling_activity_log'?: Array<ScalingActivityLogV2>;
    public constructor() { 
        super();
    }
    public withTotalNumber(totalNumber: number): ListScalingActivityV2LogsResponse {
        this['total_number'] = totalNumber;
        return this;
    }
    public set totalNumber(totalNumber: number  | undefined) {
        this['total_number'] = totalNumber;
    }
    public get totalNumber(): number | undefined {
        return this['total_number'];
    }
    public withStartNumber(startNumber: number): ListScalingActivityV2LogsResponse {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListScalingActivityV2LogsResponse {
        this['limit'] = limit;
        return this;
    }
    public withScalingActivityLog(scalingActivityLog: Array<ScalingActivityLogV2>): ListScalingActivityV2LogsResponse {
        this['scaling_activity_log'] = scalingActivityLog;
        return this;
    }
    public set scalingActivityLog(scalingActivityLog: Array<ScalingActivityLogV2>  | undefined) {
        this['scaling_activity_log'] = scalingActivityLog;
    }
    public get scalingActivityLog(): Array<ScalingActivityLogV2> | undefined {
        return this['scaling_activity_log'];
    }
}