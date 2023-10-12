

export class ListOneClickAlarmRulesRequest {
    private 'one_click_alarm_id'?: string;
    public constructor(oneClickAlarmId?: string) { 
        this['one_click_alarm_id'] = oneClickAlarmId;
    }
    public withOneClickAlarmId(oneClickAlarmId: string): ListOneClickAlarmRulesRequest {
        this['one_click_alarm_id'] = oneClickAlarmId;
        return this;
    }
    public set oneClickAlarmId(oneClickAlarmId: string  | undefined) {
        this['one_click_alarm_id'] = oneClickAlarmId;
    }
    public get oneClickAlarmId(): string | undefined {
        return this['one_click_alarm_id'];
    }
}