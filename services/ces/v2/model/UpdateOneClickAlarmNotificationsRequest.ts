import { PutAlarmNotificationReq } from './PutAlarmNotificationReq';


export class UpdateOneClickAlarmNotificationsRequest {
    private 'one_click_alarm_id'?: string;
    public body?: PutAlarmNotificationReq;
    public constructor(oneClickAlarmId?: string) { 
        this['one_click_alarm_id'] = oneClickAlarmId;
    }
    public withOneClickAlarmId(oneClickAlarmId: string): UpdateOneClickAlarmNotificationsRequest {
        this['one_click_alarm_id'] = oneClickAlarmId;
        return this;
    }
    public set oneClickAlarmId(oneClickAlarmId: string  | undefined) {
        this['one_click_alarm_id'] = oneClickAlarmId;
    }
    public get oneClickAlarmId(): string | undefined {
        return this['one_click_alarm_id'];
    }
    public withBody(body: PutAlarmNotificationReq): UpdateOneClickAlarmNotificationsRequest {
        this['body'] = body;
        return this;
    }
}