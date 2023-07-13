import { Rule } from './Rule';


export class CreateRuleRequest {
    private 'Instance-Id'?: string | undefined;
    public body?: Rule;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateRuleRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: Rule): CreateRuleRequest {
        this['body'] = body;
        return this;
    }
}