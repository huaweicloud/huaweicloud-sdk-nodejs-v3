

export class CreateOrDeleteDeviceInGroupRequest {
    private 'Instance-Id'?: string | undefined;
    private 'group_id': string | undefined;
    private 'action_id': string | undefined;
    private 'device_id': string | undefined;
    public constructor(groupId?: any, actionId?: any, deviceId?: any) { 
        this['group_id'] = groupId;
        this['action_id'] = actionId;
        this['device_id'] = deviceId;
    }
    public withInstanceId(instanceId: string): CreateOrDeleteDeviceInGroupRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withGroupId(groupId: string): CreateOrDeleteDeviceInGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withActionId(actionId: string): CreateOrDeleteDeviceInGroupRequest {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId() {
        return this['action_id'];
    }
    public withDeviceId(deviceId: string): CreateOrDeleteDeviceInGroupRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
}