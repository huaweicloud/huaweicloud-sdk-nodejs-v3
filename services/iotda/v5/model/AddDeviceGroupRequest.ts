import { AddDeviceGroupDTO } from './AddDeviceGroupDTO';


export class AddDeviceGroupRequest {
    private 'Instance-Id'?: string | undefined;
    public body?: AddDeviceGroupDTO;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): AddDeviceGroupRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: AddDeviceGroupDTO): AddDeviceGroupRequest {
        this['body'] = body;
        return this;
    }
}