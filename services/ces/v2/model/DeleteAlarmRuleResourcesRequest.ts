import { ResourcesReqV2 } from './ResourcesReqV2';


export class DeleteAlarmRuleResourcesRequest {
    private 'alarm_id'?: string;
    public body?: ResourcesReqV2;
    public constructor(alarmId?: string) { 
        this['alarm_id'] = alarmId;
    }
    public withAlarmId(alarmId: string): DeleteAlarmRuleResourcesRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withBody(body: ResourcesReqV2): DeleteAlarmRuleResourcesRequest {
        this['body'] = body;
        return this;
    }
}