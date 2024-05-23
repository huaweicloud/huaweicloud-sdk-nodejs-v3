import { ShowRedisBigKeysRequestBody } from './ShowRedisBigKeysRequestBody';


export class ShowRedisBigKeysRequest {
    private 'instance_id'?: string;
    public body?: ShowRedisBigKeysRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowRedisBigKeysRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ShowRedisBigKeysRequestBody): ShowRedisBigKeysRequest {
        this['body'] = body;
        return this;
    }
}