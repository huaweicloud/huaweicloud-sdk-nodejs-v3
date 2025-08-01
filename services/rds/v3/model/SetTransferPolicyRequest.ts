import { SetTransferPolicyRequestBody } from './SetTransferPolicyRequestBody';


export class SetTransferPolicyRequest {
    private 'instance_id'?: string;
    public body?: SetTransferPolicyRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetTransferPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SetTransferPolicyRequestBody): SetTransferPolicyRequest {
        this['body'] = body;
        return this;
    }
}