import { ResendReq } from './ResendReq';


export class ValidateConsumedMessageForRocketMqRequest {
    private 'instance_id'?: string;
    public body?: ResendReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ValidateConsumedMessageForRocketMqRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ResendReq): ValidateConsumedMessageForRocketMqRequest {
        this['body'] = body;
        return this;
    }
}