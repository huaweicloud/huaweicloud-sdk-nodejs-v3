import { AlarmConfig } from './AlarmConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAlarmConfigResponse extends SdkResponse {
    private 'alarm_configs'?: Array<AlarmConfig>;
    public data?: object;
    public constructor() { 
        super();
    }
    public withAlarmConfigs(alarmConfigs: Array<AlarmConfig>): ShowAlarmConfigResponse {
        this['alarm_configs'] = alarmConfigs;
        return this;
    }
    public set alarmConfigs(alarmConfigs: Array<AlarmConfig>  | undefined) {
        this['alarm_configs'] = alarmConfigs;
    }
    public get alarmConfigs(): Array<AlarmConfig> | undefined {
        return this['alarm_configs'];
    }
    public withData(data: object): ShowAlarmConfigResponse {
        this['data'] = data;
        return this;
    }
}