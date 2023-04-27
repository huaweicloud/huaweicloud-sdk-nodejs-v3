

export class DeleteKeywordsAlarmRuleRequest {
    private 'keywords_alarm_rule_id': string | undefined;
    private 'Content-Type': string | undefined;
    public constructor(keywordsAlarmRuleId?: any, contentType?: any) { 
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
        this['Content-Type'] = contentType;
    }
    public withKeywordsAlarmRuleId(keywordsAlarmRuleId: string): DeleteKeywordsAlarmRuleRequest {
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
        return this;
    }
    public set keywordsAlarmRuleId(keywordsAlarmRuleId: string | undefined) {
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
    }
    public get keywordsAlarmRuleId() {
        return this['keywords_alarm_rule_id'];
    }
    public withContentType(contentType: string): DeleteKeywordsAlarmRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
}