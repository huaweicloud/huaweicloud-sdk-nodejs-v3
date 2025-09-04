import { TimestampResource } from './TimestampResource';


export class AuthenticationTemplateResource {
    private 'device_id'?: object;
    public timestamp?: TimestampResource;
    public password?: object;
    public constructor(deviceId?: object) { 
        this['device_id'] = deviceId;
    }
    public withDeviceId(deviceId: object): AuthenticationTemplateResource {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: object  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): object | undefined {
        return this['device_id'];
    }
    public withTimestamp(timestamp: TimestampResource): AuthenticationTemplateResource {
        this['timestamp'] = timestamp;
        return this;
    }
    public withPassword(password: object): AuthenticationTemplateResource {
        this['password'] = password;
        return this;
    }
}