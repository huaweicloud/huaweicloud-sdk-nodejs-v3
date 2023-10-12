
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteOneClickAlarmsResponse extends SdkResponse {
    private 'one_click_alarm_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withOneClickAlarmIds(oneClickAlarmIds: Array<string>): BatchDeleteOneClickAlarmsResponse {
        this['one_click_alarm_ids'] = oneClickAlarmIds;
        return this;
    }
    public set oneClickAlarmIds(oneClickAlarmIds: Array<string>  | undefined) {
        this['one_click_alarm_ids'] = oneClickAlarmIds;
    }
    public get oneClickAlarmIds(): Array<string> | undefined {
        return this['one_click_alarm_ids'];
    }
}