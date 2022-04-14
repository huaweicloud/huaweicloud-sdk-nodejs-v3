import { DevicePropertiesRequest } from './DevicePropertiesRequest';


export class UpdatePropertiesRequest {
    private 'device_id': string | undefined;
    private 'Sp-Auth-Token'?: string | undefined;
    private 'Instance-Id'?: string | undefined;
    public body?: DevicePropertiesRequest;
    public constructor(deviceId?: any) { 
        this['device_id'] = deviceId;
    }
    public withDeviceId(deviceId: string): UpdatePropertiesRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withSpAuthToken(spAuthToken: string): UpdatePropertiesRequest {
        this['Sp-Auth-Token'] = spAuthToken;
        return this;
    }
    public set spAuthToken(spAuthToken: string | undefined) {
        this['Sp-Auth-Token'] = spAuthToken;
    }
    public get spAuthToken() {
        return this['Sp-Auth-Token'];
    }
    public withInstanceId(instanceId: string): UpdatePropertiesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: DevicePropertiesRequest): UpdatePropertiesRequest {
        this['body'] = body;
        return this;
    }
}