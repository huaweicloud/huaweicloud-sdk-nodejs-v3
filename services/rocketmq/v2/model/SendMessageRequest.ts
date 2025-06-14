import { SendMessageResp } from './SendMessageResp';


export class SendMessageRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public body?: SendMessageResp;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: string): SendMessageRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): SendMessageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SendMessageResp): SendMessageRequest {
        this['body'] = body;
        return this;
    }
}