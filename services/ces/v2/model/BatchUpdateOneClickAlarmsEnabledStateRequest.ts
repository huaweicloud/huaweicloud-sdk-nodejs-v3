import { BatchUpdateOneClickAlarmsEnabledStateRequestBody } from './BatchUpdateOneClickAlarmsEnabledStateRequestBody';


export class BatchUpdateOneClickAlarmsEnabledStateRequest {
    private 'one_click_alarm_id'?: string;
    public body?: BatchUpdateOneClickAlarmsEnabledStateRequestBody;
    public constructor(oneClickAlarmId?: string) { 
        this['one_click_alarm_id'] = oneClickAlarmId;
    }
    public withOneClickAlarmId(oneClickAlarmId: string): BatchUpdateOneClickAlarmsEnabledStateRequest {
        this['one_click_alarm_id'] = oneClickAlarmId;
        return this;
    }
    public set oneClickAlarmId(oneClickAlarmId: string  | undefined) {
        this['one_click_alarm_id'] = oneClickAlarmId;
    }
    public get oneClickAlarmId(): string | undefined {
        return this['one_click_alarm_id'];
    }
    public withBody(body: BatchUpdateOneClickAlarmsEnabledStateRequestBody): BatchUpdateOneClickAlarmsEnabledStateRequest {
        this['body'] = body;
        return this;
    }
}