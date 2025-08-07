import { AutoHandlerAlarmRequestBody } from './AutoHandlerAlarmRequestBody';


export class HandleAlarmRequest {
    private 'alarm_id'?: string;
    public body?: AutoHandlerAlarmRequestBody;
    public constructor(alarmId?: string) { 
        this['alarm_id'] = alarmId;
    }
    public withAlarmId(alarmId: string): HandleAlarmRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withBody(body: AutoHandlerAlarmRequestBody): HandleAlarmRequest {
        this['body'] = body;
        return this;
    }
}