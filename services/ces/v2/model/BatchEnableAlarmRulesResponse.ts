
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchEnableAlarmRulesResponse extends SdkResponse {
    private 'alarm_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withAlarmIds(alarmIds: Array<string>): BatchEnableAlarmRulesResponse {
        this['alarm_ids'] = alarmIds;
        return this;
    }
    public set alarmIds(alarmIds: Array<string>  | undefined) {
        this['alarm_ids'] = alarmIds;
    }
    public get alarmIds(): Array<string> | undefined {
        return this['alarm_ids'];
    }
}