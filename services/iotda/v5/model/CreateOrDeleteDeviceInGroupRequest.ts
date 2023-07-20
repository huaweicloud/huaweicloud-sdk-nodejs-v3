

export class CreateOrDeleteDeviceInGroupRequest {
    private 'Instance-Id'?: string;
    private 'group_id'?: string;
    private 'action_id'?: string;
    private 'device_id'?: string;
    public constructor(groupId?: string, actionId?: string, deviceId?: string) { 
        this['group_id'] = groupId;
        this['action_id'] = actionId;
        this['device_id'] = deviceId;
    }
    public withInstanceId(instanceId: string): CreateOrDeleteDeviceInGroupRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withGroupId(groupId: string): CreateOrDeleteDeviceInGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withActionId(actionId: string): CreateOrDeleteDeviceInGroupRequest {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withDeviceId(deviceId: string): CreateOrDeleteDeviceInGroupRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
}