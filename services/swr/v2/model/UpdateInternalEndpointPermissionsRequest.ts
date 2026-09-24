import { UpdateInternalEndpointPermissionsRequestBody } from './UpdateInternalEndpointPermissionsRequestBody';


export class UpdateInternalEndpointPermissionsRequest {
    private 'instance_id'?: string;
    public body?: UpdateInternalEndpointPermissionsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInternalEndpointPermissionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateInternalEndpointPermissionsRequestBody): UpdateInternalEndpointPermissionsRequest {
        this['body'] = body;
        return this;
    }
}