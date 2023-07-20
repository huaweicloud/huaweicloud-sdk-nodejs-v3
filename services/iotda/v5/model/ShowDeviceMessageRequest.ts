

export class ShowDeviceMessageRequest {
    private 'device_id'?: string;
    private 'Instance-Id'?: string;
    private 'message_id'?: string;
    public constructor(deviceId?: string, messageId?: string) { 
        this['device_id'] = deviceId;
        this['message_id'] = messageId;
    }
    public withDeviceId(deviceId: string): ShowDeviceMessageRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withInstanceId(instanceId: string): ShowDeviceMessageRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withMessageId(messageId: string): ShowDeviceMessageRequest {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string  | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId(): string | undefined {
        return this['message_id'];
    }
}