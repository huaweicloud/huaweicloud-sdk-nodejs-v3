import { DeleteSqlLimitRuleReqV3 } from './DeleteSqlLimitRuleReqV3';


export class DeleteSqlLimitRequest {
    private 'instance_id'?: string;
    public body?: DeleteSqlLimitRuleReqV3;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteSqlLimitRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteSqlLimitRuleReqV3): DeleteSqlLimitRequest {
        this['body'] = body;
        return this;
    }
}