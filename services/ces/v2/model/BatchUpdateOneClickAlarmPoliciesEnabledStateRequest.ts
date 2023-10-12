import { BatchEnableAlarmPoliciesRequestBody } from './BatchEnableAlarmPoliciesRequestBody';


export class BatchUpdateOneClickAlarmPoliciesEnabledStateRequest {
    private 'one_click_alarm_id'?: string;
    private 'alarm_id'?: string;
    public body?: BatchEnableAlarmPoliciesRequestBody;
    public constructor(oneClickAlarmId?: string, alarmId?: string) { 
        this['one_click_alarm_id'] = oneClickAlarmId;
        this['alarm_id'] = alarmId;
    }
    public withOneClickAlarmId(oneClickAlarmId: string): BatchUpdateOneClickAlarmPoliciesEnabledStateRequest {
        this['one_click_alarm_id'] = oneClickAlarmId;
        return this;
    }
    public set oneClickAlarmId(oneClickAlarmId: string  | undefined) {
        this['one_click_alarm_id'] = oneClickAlarmId;
    }
    public get oneClickAlarmId(): string | undefined {
        return this['one_click_alarm_id'];
    }
    public withAlarmId(alarmId: string): BatchUpdateOneClickAlarmPoliciesEnabledStateRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withBody(body: BatchEnableAlarmPoliciesRequestBody): BatchUpdateOneClickAlarmPoliciesEnabledStateRequest {
        this['body'] = body;
        return this;
    }
}