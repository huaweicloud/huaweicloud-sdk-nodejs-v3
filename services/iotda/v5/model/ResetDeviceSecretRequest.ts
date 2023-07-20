import { ResetDeviceSecret } from './ResetDeviceSecret';


export class ResetDeviceSecretRequest {
    private 'Instance-Id'?: string;
    private 'device_id'?: string;
    private 'action_id'?: string;
    public body?: ResetDeviceSecret;
    public constructor(deviceId?: string, actionId?: string) { 
        this['device_id'] = deviceId;
        this['action_id'] = actionId;
    }
    public withInstanceId(instanceId: string): ResetDeviceSecretRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withDeviceId(deviceId: string): ResetDeviceSecretRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withActionId(actionId: string): ResetDeviceSecretRequest {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withBody(body: ResetDeviceSecret): ResetDeviceSecretRequest {
        this['body'] = body;
        return this;
    }
}