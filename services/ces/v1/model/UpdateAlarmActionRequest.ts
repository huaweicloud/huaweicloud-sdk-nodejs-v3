import { UpdateAlarmActionRequestBody } from './UpdateAlarmActionRequestBody';


export class UpdateAlarmActionRequest {
    private 'alarm_id'?: string;
    public body?: UpdateAlarmActionRequestBody;
    public constructor(alarmId?: string) { 
        this['alarm_id'] = alarmId;
    }
    public withAlarmId(alarmId: string): UpdateAlarmActionRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withBody(body: UpdateAlarmActionRequestBody): UpdateAlarmActionRequest {
        this['body'] = body;
        return this;
    }
}