import { EndpointPermissionList } from './EndpointPermissionList';


export class AddEndpointPermissionsRequest {
    private 'instance_id'?: string;
    public body?: EndpointPermissionList;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AddEndpointPermissionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: EndpointPermissionList): AddEndpointPermissionsRequest {
        this['body'] = body;
        return this;
    }
}