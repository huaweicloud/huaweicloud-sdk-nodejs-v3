import { TimestampResource } from './TimestampResource';


export class UpdateAuthenticationTemplateResource {
    private 'device_id'?: object;
    public timestamp?: TimestampResource;
    public password?: object;
    public constructor() { 
    }
    public withDeviceId(deviceId: object): UpdateAuthenticationTemplateResource {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: object  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): object | undefined {
        return this['device_id'];
    }
    public withTimestamp(timestamp: TimestampResource): UpdateAuthenticationTemplateResource {
        this['timestamp'] = timestamp;
        return this;
    }
    public withPassword(password: object): UpdateAuthenticationTemplateResource {
        this['password'] = password;
        return this;
    }
}