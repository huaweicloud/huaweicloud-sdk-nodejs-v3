

export class Event2alarmRuleBodyMetadata {
    public customField?: Array<string>;
    public constructor() { 
    }
    public withCustomField(customField: Array<string>): Event2alarmRuleBodyMetadata {
        this['customField'] = customField;
        return this;
    }
}