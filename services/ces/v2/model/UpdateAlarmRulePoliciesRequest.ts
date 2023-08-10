import { PoliciesReqV2 } from './PoliciesReqV2';


export class UpdateAlarmRulePoliciesRequest {
    private 'alarm_id'?: string;
    public body?: PoliciesReqV2;
    public constructor(alarmId?: string) { 
        this['alarm_id'] = alarmId;
    }
    public withAlarmId(alarmId: string): UpdateAlarmRulePoliciesRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withBody(body: PoliciesReqV2): UpdateAlarmRulePoliciesRequest {
        this['body'] = body;
        return this;
    }
}