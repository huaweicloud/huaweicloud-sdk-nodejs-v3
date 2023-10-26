

export class DeleteActionRuleRequest {
    public body?: Array<string>;
    public constructor() { 
    }
    public withBody(body: Array<string>): DeleteActionRuleRequest {
        this['body'] = body;
        return this;
    }
}