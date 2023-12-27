import { AlarmInfoResponseAlarmInfo } from './AlarmInfoResponseAlarmInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFactoryAlarmInfoResponse extends SdkResponse {
    private 'alarm_info'?: Array<AlarmInfoResponseAlarmInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withAlarmInfo(alarmInfo: Array<AlarmInfoResponseAlarmInfo>): ListFactoryAlarmInfoResponse {
        this['alarm_info'] = alarmInfo;
        return this;
    }
    public set alarmInfo(alarmInfo: Array<AlarmInfoResponseAlarmInfo>  | undefined) {
        this['alarm_info'] = alarmInfo;
    }
    public get alarmInfo(): Array<AlarmInfoResponseAlarmInfo> | undefined {
        return this['alarm_info'];
    }
    public withTotal(total: number): ListFactoryAlarmInfoResponse {
        this['total'] = total;
        return this;
    }
}