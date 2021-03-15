import { UpdateDesireds } from './UpdateDesireds';


export class UpdateDeviceShadowDesiredDataRequest {
    private 'Instance-Id'?: string | undefined;
    private 'device_id': string | undefined;
    public body?: UpdateDesireds;
    public constructor(deviceId: any) { 
        this['device_id'] = deviceId;
    }
    public withInstanceId(instanceId: string): UpdateDeviceShadowDesiredDataRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withDeviceId(deviceId: string): UpdateDeviceShadowDesiredDataRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withBody(body: UpdateDesireds): UpdateDeviceShadowDesiredDataRequest {
        this['body'] = body;
        return this;
    }
}