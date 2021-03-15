import { AuthInfoWithoutSecret } from './AuthInfoWithoutSecret';


export class UpdateDevice {
    private 'device_name'?: string | undefined;
    public description?: string;
    private 'extension_info'?: object | undefined;
    private 'auth_info'?: AuthInfoWithoutSecret | undefined;
    public constructor() { 
    }
    public withDeviceName(deviceName: string): UpdateDevice {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName() {
        return this['device_name'];
    }
    public withDescription(description: string): UpdateDevice {
        this['description'] = description;
        return this;
    }
    public withExtensionInfo(extensionInfo: object): UpdateDevice {
        this['extension_info'] = extensionInfo;
        return this;
    }
    public set extensionInfo(extensionInfo: object | undefined) {
        this['extension_info'] = extensionInfo;
    }
    public get extensionInfo() {
        return this['extension_info'];
    }
    public withAuthInfo(authInfo: AuthInfoWithoutSecret): UpdateDevice {
        this['auth_info'] = authInfo;
        return this;
    }
    public set authInfo(authInfo: AuthInfoWithoutSecret | undefined) {
        this['auth_info'] = authInfo;
    }
    public get authInfo() {
        return this['auth_info'];
    }
}