import { ResetDeviceSecret } from './ResetDeviceSecret';


export class ResetDeviceSecretRequest {
    private 'Instance-Id'?: string | undefined;
    private 'device_id': string | undefined;
    private 'action_id': string | undefined;
    public body?: ResetDeviceSecret;
    public constructor(deviceId?: any, actionId?: any) { 
        this['device_id'] = deviceId;
        this['action_id'] = actionId;
    }
    public withInstanceId(instanceId: string): ResetDeviceSecretRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withDeviceId(deviceId: string): ResetDeviceSecretRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withActionId(actionId: string): ResetDeviceSecretRequest {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId() {
        return this['action_id'];
    }
    public withBody(body: ResetDeviceSecret): ResetDeviceSecretRequest {
        this['body'] = body;
        return this;
    }
}