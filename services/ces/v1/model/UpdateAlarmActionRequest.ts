import { ModifyAlarmActionReq } from './ModifyAlarmActionReq';


export class UpdateAlarmActionRequest {
    private 'alarm_id'?: string;
    public body?: ModifyAlarmActionReq;
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
    public withBody(body: ModifyAlarmActionReq): UpdateAlarmActionRequest {
        this['body'] = body;
        return this;
    }
}