
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAlarmRulesResponse extends SdkResponse {
    private 'alarm_id'?: string;
    public constructor() { 
        super();
    }
    public withAlarmId(alarmId: string): CreateAlarmRulesResponse {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
}