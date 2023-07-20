import { ModifyRedisConfigBody } from './ModifyRedisConfigBody';


export class UpdateConfigurationsRequest {
    private 'instance_id'?: string;
    public body?: ModifyRedisConfigBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateConfigurationsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyRedisConfigBody): UpdateConfigurationsRequest {
        this['body'] = body;
        return this;
    }
}