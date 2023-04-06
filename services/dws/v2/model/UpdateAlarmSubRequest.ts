import { AlarmSubUpdateRequest } from './AlarmSubUpdateRequest';


export class UpdateAlarmSubRequest {
    private 'alarm_sub_id': string | undefined;
    public body?: AlarmSubUpdateRequest;
    public constructor(alarmSubId?: any) { 
        this['alarm_sub_id'] = alarmSubId;
    }
    public withAlarmSubId(alarmSubId: string): UpdateAlarmSubRequest {
        this['alarm_sub_id'] = alarmSubId;
        return this;
    }
    public set alarmSubId(alarmSubId: string | undefined) {
        this['alarm_sub_id'] = alarmSubId;
    }
    public get alarmSubId() {
        return this['alarm_sub_id'];
    }
    public withBody(body: AlarmSubUpdateRequest): UpdateAlarmSubRequest {
        this['body'] = body;
        return this;
    }
}