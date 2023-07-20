import { ScalingActivityLogList } from './ScalingActivityLogList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScalingActivityLogsResponse extends SdkResponse {
    private 'total_number'?: number;
    private 'start_number'?: number;
    public limit?: number;
    private 'scaling_activity_log'?: Array<ScalingActivityLogList>;
    public constructor() { 
        super();
    }
    public withTotalNumber(totalNumber: number): ListScalingActivityLogsResponse {
        this['total_number'] = totalNumber;
        return this;
    }
    public set totalNumber(totalNumber: number  | undefined) {
        this['total_number'] = totalNumber;
    }
    public get totalNumber(): number | undefined {
        return this['total_number'];
    }
    public withStartNumber(startNumber: number): ListScalingActivityLogsResponse {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListScalingActivityLogsResponse {
        this['limit'] = limit;
        return this;
    }
    public withScalingActivityLog(scalingActivityLog: Array<ScalingActivityLogList>): ListScalingActivityLogsResponse {
        this['scaling_activity_log'] = scalingActivityLog;
        return this;
    }
    public set scalingActivityLog(scalingActivityLog: Array<ScalingActivityLogList>  | undefined) {
        this['scaling_activity_log'] = scalingActivityLog;
    }
    public get scalingActivityLog(): Array<ScalingActivityLogList> | undefined {
        return this['scaling_activity_log'];
    }
}