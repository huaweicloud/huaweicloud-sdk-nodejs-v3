import { SetAuditlogPolicyRequestBody } from './SetAuditlogPolicyRequestBody';


export class SetAuditlogPolicyRequest {
    private 'instance_id'?: string;
    public body?: SetAuditlogPolicyRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetAuditlogPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SetAuditlogPolicyRequestBody): SetAuditlogPolicyRequest {
        this['body'] = body;
        return this;
    }
}