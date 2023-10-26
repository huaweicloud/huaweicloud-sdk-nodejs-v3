

export class DeleteEvent2alarmRuleRequest {
    public body?: Array<string>;
    public constructor() { 
    }
    public withBody(body: Array<string>): DeleteEvent2alarmRuleRequest {
        this['body'] = body;
        return this;
    }
}