import { BatchIdBody } from './BatchIdBody';


export class BatchDeleteInstanceIpRuleRequest {
    private 'instance_id'?: string;
    public ip?: string;
    public body?: BatchIdBody;
    public constructor(instanceId?: string, ip?: string) { 
        this['instance_id'] = instanceId;
        this['ip'] = ip;
    }
    public withInstanceId(instanceId: string): BatchDeleteInstanceIpRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIp(ip: string): BatchDeleteInstanceIpRuleRequest {
        this['ip'] = ip;
        return this;
    }
    public withBody(body: BatchIdBody): BatchDeleteInstanceIpRuleRequest {
        this['body'] = body;
        return this;
    }
}