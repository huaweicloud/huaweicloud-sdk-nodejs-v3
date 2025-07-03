import { FrontAlarmNotifyResult } from './FrontAlarmNotifyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmNotifyResponse extends SdkResponse {
    private 'front_alarm_notify_results'?: Array<FrontAlarmNotifyResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withFrontAlarmNotifyResults(frontAlarmNotifyResults: Array<FrontAlarmNotifyResult>): ListAlarmNotifyResponse {
        this['front_alarm_notify_results'] = frontAlarmNotifyResults;
        return this;
    }
    public set frontAlarmNotifyResults(frontAlarmNotifyResults: Array<FrontAlarmNotifyResult>  | undefined) {
        this['front_alarm_notify_results'] = frontAlarmNotifyResults;
    }
    public get frontAlarmNotifyResults(): Array<FrontAlarmNotifyResult> | undefined {
        return this['front_alarm_notify_results'];
    }
    public withTotalCount(totalCount: number): ListAlarmNotifyResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}