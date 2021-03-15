import { UpdateDeviceGroupDTO } from './UpdateDeviceGroupDTO';


export class UpdateDeviceGroupRequest {
    private 'Instance-Id'?: string | undefined;
    private 'group_id': string | undefined;
    public body?: UpdateDeviceGroupDTO;
    public constructor(groupId: any) { 
        this['group_id'] = groupId;
    }
    public withInstanceId(instanceId: string): UpdateDeviceGroupRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withGroupId(groupId: string): UpdateDeviceGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withBody(body: UpdateDeviceGroupDTO): UpdateDeviceGroupRequest {
        this['body'] = body;
        return this;
    }
}