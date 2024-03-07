import { CreateSqlLimitRuleReqV3 } from './CreateSqlLimitRuleReqV3';


export class CreateSqlLimitRequest {
    private 'instance_id'?: string;
    public body?: CreateSqlLimitRuleReqV3;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateSqlLimitRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateSqlLimitRuleReqV3): CreateSqlLimitRequest {
        this['body'] = body;
        return this;
    }
}