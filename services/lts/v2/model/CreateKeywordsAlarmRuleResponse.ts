
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateKeywordsAlarmRuleResponse extends SdkResponse {
    private 'keywords_alarm_rule_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withKeywordsAlarmRuleId(keywordsAlarmRuleId: string): CreateKeywordsAlarmRuleResponse {
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
        return this;
    }
    public set keywordsAlarmRuleId(keywordsAlarmRuleId: string | undefined) {
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
    }
    public get keywordsAlarmRuleId() {
        return this['keywords_alarm_rule_id'];
    }
}