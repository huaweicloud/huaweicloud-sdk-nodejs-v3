import { UpdateDeviceGroupDTO } from './UpdateDeviceGroupDTO';


export class UpdateDeviceGroupRequest {
    private 'Instance-Id'?: string;
    private 'group_id'?: string;
    public body?: UpdateDeviceGroupDTO;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withInstanceId(instanceId: string): UpdateDeviceGroupRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withGroupId(groupId: string): UpdateDeviceGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: UpdateDeviceGroupDTO): UpdateDeviceGroupRequest {
        this['body'] = body;
        return this;
    }
}