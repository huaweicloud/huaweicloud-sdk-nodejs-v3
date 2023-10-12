
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateOneClickAlarmPoliciesEnabledStateResponse extends SdkResponse {
    private 'alarm_policy_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withAlarmPolicyIds(alarmPolicyIds: Array<string>): BatchUpdateOneClickAlarmPoliciesEnabledStateResponse {
        this['alarm_policy_ids'] = alarmPolicyIds;
        return this;
    }
    public set alarmPolicyIds(alarmPolicyIds: Array<string>  | undefined) {
        this['alarm_policy_ids'] = alarmPolicyIds;
    }
    public get alarmPolicyIds(): Array<string> | undefined {
        return this['alarm_policy_ids'];
    }
}