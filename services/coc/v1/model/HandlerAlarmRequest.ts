import { AutoHandlerAlarmRequestBody } from './AutoHandlerAlarmRequestBody';


export class HandlerAlarmRequest {
    private 'alarm_id'?: string;
    public body?: AutoHandlerAlarmRequestBody;
    public constructor(alarmId?: string) { 
        this['alarm_id'] = alarmId;
    }
    public withAlarmId(alarmId: string): HandlerAlarmRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withBody(body: AutoHandlerAlarmRequestBody): HandlerAlarmRequest {
        this['body'] = body;
        return this;
    }
}