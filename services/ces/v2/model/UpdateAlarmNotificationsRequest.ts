import { PutAlarmNotificationReq } from './PutAlarmNotificationReq';


export class UpdateAlarmNotificationsRequest {
    private 'alarm_id'?: string;
    public body?: PutAlarmNotificationReq;
    public constructor(alarmId?: string) { 
        this['alarm_id'] = alarmId;
    }
    public withAlarmId(alarmId: string): UpdateAlarmNotificationsRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withBody(body: PutAlarmNotificationReq): UpdateAlarmNotificationsRequest {
        this['body'] = body;
        return this;
    }
}