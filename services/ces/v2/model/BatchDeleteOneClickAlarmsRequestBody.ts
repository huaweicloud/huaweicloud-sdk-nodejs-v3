

export class BatchDeleteOneClickAlarmsRequestBody {
    private 'one_click_alarm_ids'?: Array<string>;
    public constructor(oneClickAlarmIds?: Array<string>) { 
        this['one_click_alarm_ids'] = oneClickAlarmIds;
    }
    public withOneClickAlarmIds(oneClickAlarmIds: Array<string>): BatchDeleteOneClickAlarmsRequestBody {
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