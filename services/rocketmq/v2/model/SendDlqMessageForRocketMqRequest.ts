import { DeadletterResendReq } from './DeadletterResendReq';


export class SendDlqMessageForRocketMqRequest {
    private 'instance_id'?: string;
    public body?: DeadletterResendReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SendDlqMessageForRocketMqRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeadletterResendReq): SendDlqMessageForRocketMqRequest {
        this['body'] = body;
        return this;
    }
}