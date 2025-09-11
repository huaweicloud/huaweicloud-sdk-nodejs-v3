import { SqlRuleRequest } from './SqlRuleRequest';


export class ListSqlInjectionRulesNewRequest {
    private 'instance_id'?: string;
    public body?: SqlRuleRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListSqlInjectionRulesNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SqlRuleRequest): ListSqlInjectionRulesNewRequest {
        this['body'] = body;
        return this;
    }
}