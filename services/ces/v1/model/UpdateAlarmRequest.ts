import { UpdateAlarmRequestBody } from './UpdateAlarmRequestBody';


export class UpdateAlarmRequest {
    private 'alarm_id'?: string;
    public body?: UpdateAlarmRequestBody;
    public constructor(alarmId?: string) { 
        this['alarm_id'] = alarmId;
    }
    public withAlarmId(alarmId: string): UpdateAlarmRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withBody(body: UpdateAlarmRequestBody): UpdateAlarmRequest {
        this['body'] = body;
        return this;
    }
}