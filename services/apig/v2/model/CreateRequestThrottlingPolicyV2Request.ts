import { ThrottleBaseInfo } from './ThrottleBaseInfo';


export class CreateRequestThrottlingPolicyV2Request {
    private 'instance_id'?: string;
    public body?: ThrottleBaseInfo;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateRequestThrottlingPolicyV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ThrottleBaseInfo): CreateRequestThrottlingPolicyV2Request {
        this['body'] = body;
        return this;
    }
}