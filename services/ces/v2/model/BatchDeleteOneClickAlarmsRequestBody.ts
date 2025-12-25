

export class BatchDeleteOneClickAlarmsRequestBody {
    private 'one_click_alarm_ids'?: Array<string>;
    private 'action_type'?: string;
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
    public withActionType(actionType: string): BatchDeleteOneClickAlarmsRequestBody {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: string  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): string | undefined {
        return this['action_type'];
    }
}