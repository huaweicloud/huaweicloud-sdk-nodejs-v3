import { UpdateOneClickAlarmNotificationsRequestBody } from './UpdateOneClickAlarmNotificationsRequestBody';


export class UpdateOneClickAlarmNotificationsRequest {
    private 'one_click_alarm_id'?: string;
    public body?: UpdateOneClickAlarmNotificationsRequestBody;
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
    public withBody(body: UpdateOneClickAlarmNotificationsRequestBody): UpdateOneClickAlarmNotificationsRequest {
        this['body'] = body;
        return this;
    }
}