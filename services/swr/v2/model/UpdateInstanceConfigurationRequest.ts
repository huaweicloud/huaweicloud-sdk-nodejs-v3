import { UpdateInstanceConfigurationRequestBody } from './UpdateInstanceConfigurationRequestBody';


export class UpdateInstanceConfigurationRequest {
    private 'instance_id'?: string;
    public body?: UpdateInstanceConfigurationRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceConfigurationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateInstanceConfigurationRequestBody): UpdateInstanceConfigurationRequest {
        this['body'] = body;
        return this;
    }
}