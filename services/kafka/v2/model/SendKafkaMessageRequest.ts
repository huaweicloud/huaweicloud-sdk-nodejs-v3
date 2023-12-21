import { SendKafkaMessageRequestBody } from './SendKafkaMessageRequestBody';


export class SendKafkaMessageRequest {
    private 'instance_id'?: string;
    private 'action_id'?: string;
    public body?: SendKafkaMessageRequestBody;
    public constructor(instanceId?: string, actionId?: string) { 
        this['instance_id'] = instanceId;
        this['action_id'] = actionId;
    }
    public withInstanceId(instanceId: string): SendKafkaMessageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withActionId(actionId: string): SendKafkaMessageRequest {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withBody(body: SendKafkaMessageRequestBody): SendKafkaMessageRequest {
        this['body'] = body;
        return this;
    }
}