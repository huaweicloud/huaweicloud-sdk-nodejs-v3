import { ModifyRedisConfigBody } from './ModifyRedisConfigBody';


export class UpdateInstanceConfigRequest {
    private 'instance_id'?: string;
    public body?: ModifyRedisConfigBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceConfigRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyRedisConfigBody): UpdateInstanceConfigRequest {
        this['body'] = body;
        return this;
    }
}