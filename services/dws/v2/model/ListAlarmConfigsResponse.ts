import { AlarmConfigResponse } from './AlarmConfigResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmConfigsResponse extends SdkResponse {
    public count?: number;
    private 'alarm_configs'?: Array<AlarmConfigResponse> | undefined;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAlarmConfigsResponse {
        this['count'] = count;
        return this;
    }
    public withAlarmConfigs(alarmConfigs: Array<AlarmConfigResponse>): ListAlarmConfigsResponse {
        this['alarm_configs'] = alarmConfigs;
        return this;
    }
    public set alarmConfigs(alarmConfigs: Array<AlarmConfigResponse> | undefined) {
        this['alarm_configs'] = alarmConfigs;
    }
    public get alarmConfigs() {
        return this['alarm_configs'];
    }
}