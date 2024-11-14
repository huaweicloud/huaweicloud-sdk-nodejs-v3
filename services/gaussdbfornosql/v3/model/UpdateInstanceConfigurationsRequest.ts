import { UpdateInstanceConfigurationsRequestBody } from './UpdateInstanceConfigurationsRequestBody';


export class UpdateInstanceConfigurationsRequest {
    private 'instance_id'?: string;
    public body?: UpdateInstanceConfigurationsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceConfigurationsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateInstanceConfigurationsRequestBody): UpdateInstanceConfigurationsRequest {
        this['body'] = body;
        return this;
    }
}