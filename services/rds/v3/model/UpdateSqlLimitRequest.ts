import { UpdateSqlLimitRuleReqV3 } from './UpdateSqlLimitRuleReqV3';


export class UpdateSqlLimitRequest {
    private 'instance_id'?: string;
    public body?: UpdateSqlLimitRuleReqV3;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateSqlLimitRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateSqlLimitRuleReqV3): UpdateSqlLimitRequest {
        this['body'] = body;
        return this;
    }
}