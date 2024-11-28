import { RestoreRedisPitrRequestBody } from './RestoreRedisPitrRequestBody';


export class RestoreRedisPitrRequest {
    private 'instance_id'?: string;
    public body?: RestoreRedisPitrRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): RestoreRedisPitrRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RestoreRedisPitrRequestBody): RestoreRedisPitrRequest {
        this['body'] = body;
        return this;
    }
}