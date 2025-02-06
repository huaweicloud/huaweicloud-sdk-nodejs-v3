

export class AlarmInfo {
    public topics?: Array<string>;
    public alarmRuleTemplateId?: string;
    public promInstanceID?: string;
    public promEnterpriseProjectID?: string;
    public constructor(topics?: Array<string>) { 
        this['topics'] = topics;
    }
    public withTopics(topics: Array<string>): AlarmInfo {
        this['topics'] = topics;
        return this;
    }
    public withAlarmRuleTemplateId(alarmRuleTemplateId: string): AlarmInfo {
        this['alarmRuleTemplateId'] = alarmRuleTemplateId;
        return this;
    }
    public withPromInstanceID(promInstanceID: string): AlarmInfo {
        this['promInstanceID'] = promInstanceID;
        return this;
    }
    public withPromEnterpriseProjectID(promEnterpriseProjectID: string): AlarmInfo {
        this['promEnterpriseProjectID'] = promEnterpriseProjectID;
        return this;
    }
}