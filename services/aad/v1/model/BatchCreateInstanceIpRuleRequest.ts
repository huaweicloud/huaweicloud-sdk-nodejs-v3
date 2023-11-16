import { BatchTransferRuleBody } from './BatchTransferRuleBody';


export class BatchCreateInstanceIpRuleRequest {
    private 'instance_id'?: string;
    public ip?: string;
    public body?: BatchTransferRuleBody;
    public constructor(instanceId?: string, ip?: string) { 
        this['instance_id'] = instanceId;
        this['ip'] = ip;
    }
    public withInstanceId(instanceId: string): BatchCreateInstanceIpRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIp(ip: string): BatchCreateInstanceIpRuleRequest {
        this['ip'] = ip;
        return this;
    }
    public withBody(body: BatchTransferRuleBody): BatchCreateInstanceIpRuleRequest {
        this['body'] = body;
        return this;
    }
}