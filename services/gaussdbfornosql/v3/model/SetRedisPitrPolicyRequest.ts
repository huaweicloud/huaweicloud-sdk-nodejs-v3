import { SetRedisPitrPolicyRequestBody } from './SetRedisPitrPolicyRequestBody';


export class SetRedisPitrPolicyRequest {
    private 'instance_id'?: string;
    public body?: SetRedisPitrPolicyRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetRedisPitrPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SetRedisPitrPolicyRequestBody): SetRedisPitrPolicyRequest {
        this['body'] = body;
        return this;
    }
}