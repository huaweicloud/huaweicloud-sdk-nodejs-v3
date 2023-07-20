

export class ShowAsyncDeviceCommandRequest {
    private 'device_id'?: string;
    private 'Instance-Id'?: string;
    private 'command_id'?: string;
    public constructor(deviceId?: string, commandId?: string) { 
        this['device_id'] = deviceId;
        this['command_id'] = commandId;
    }
    public withDeviceId(deviceId: string): ShowAsyncDeviceCommandRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withInstanceId(instanceId: string): ShowAsyncDeviceCommandRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withCommandId(commandId: string): ShowAsyncDeviceCommandRequest {
        this['command_id'] = commandId;
        return this;
    }
    public set commandId(commandId: string  | undefined) {
        this['command_id'] = commandId;
    }
    public get commandId(): string | undefined {
        return this['command_id'];
    }
}