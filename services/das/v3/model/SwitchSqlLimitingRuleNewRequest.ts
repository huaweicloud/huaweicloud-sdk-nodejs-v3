import { SwitchSqlLimitingRuleNewRequestBody } from './SwitchSqlLimitingRuleNewRequestBody';


export class SwitchSqlLimitingRuleNewRequest {
    private 'instance_id'?: string;
    public body?: SwitchSqlLimitingRuleNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SwitchSqlLimitingRuleNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchSqlLimitingRuleNewRequestBody): SwitchSqlLimitingRuleNewRequest {
        this['body'] = body;
        return this;
    }
}