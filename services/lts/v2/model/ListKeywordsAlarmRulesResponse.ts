import { KeywordsAlarmRuleRespList } from './KeywordsAlarmRuleRespList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKeywordsAlarmRulesResponse extends SdkResponse {
    private 'keywords_alarm_rules'?: Array<KeywordsAlarmRuleRespList>;
    public constructor() { 
        super();
    }
    public withKeywordsAlarmRules(keywordsAlarmRules: Array<KeywordsAlarmRuleRespList>): ListKeywordsAlarmRulesResponse {
        this['keywords_alarm_rules'] = keywordsAlarmRules;
        return this;
    }
    public set keywordsAlarmRules(keywordsAlarmRules: Array<KeywordsAlarmRuleRespList>  | undefined) {
        this['keywords_alarm_rules'] = keywordsAlarmRules;
    }
    public get keywordsAlarmRules(): Array<KeywordsAlarmRuleRespList> | undefined {
        return this['keywords_alarm_rules'];
    }
}