import { KeywordsAlarmRuleRespList } from './KeywordsAlarmRuleRespList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKeywordsAlarmRulesResponse extends SdkResponse {
    private 'keywords_alarm_rules'?: Array<KeywordsAlarmRuleRespList> | undefined;
    public constructor() { 
        super();
    }
    public withKeywordsAlarmRules(keywordsAlarmRules: Array<KeywordsAlarmRuleRespList>): ListKeywordsAlarmRulesResponse {
        this['keywords_alarm_rules'] = keywordsAlarmRules;
        return this;
    }
    public set keywordsAlarmRules(keywordsAlarmRules: Array<KeywordsAlarmRuleRespList> | undefined) {
        this['keywords_alarm_rules'] = keywordsAlarmRules;
    }
    public get keywordsAlarmRules() {
        return this['keywords_alarm_rules'];
    }
}