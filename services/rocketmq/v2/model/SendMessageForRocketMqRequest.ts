import { SendMessageReq } from './SendMessageReq';


export class SendMessageForRocketMqRequest {
    private 'instance_id'?: string;
    public body?: SendMessageReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SendMessageForRocketMqRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SendMessageReq): SendMessageForRocketMqRequest {
        this['body'] = body;
        return this;
    }
}