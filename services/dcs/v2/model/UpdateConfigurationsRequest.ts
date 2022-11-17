import { ModifyRedisConfigBody } from './ModifyRedisConfigBody';


export class UpdateConfigurationsRequest {
    private 'instance_id': string | undefined;
    public body?: ModifyRedisConfigBody;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateConfigurationsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: ModifyRedisConfigBody): UpdateConfigurationsRequest {
        this['body'] = body;
        return this;
    }
}