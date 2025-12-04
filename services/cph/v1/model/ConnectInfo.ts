import { ConnectInfoAccessInfo } from './ConnectInfoAccessInfo';


export class ConnectInfo {
    private 'phone_id'?: string;
    private 'access_info'?: ConnectInfoAccessInfo;
    public constructor() { 
    }
    public withPhoneId(phoneId: string): ConnectInfo {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
    public withAccessInfo(accessInfo: ConnectInfoAccessInfo): ConnectInfo {
        this['access_info'] = accessInfo;
        return this;
    }
    public set accessInfo(accessInfo: ConnectInfoAccessInfo  | undefined) {
        this['access_info'] = accessInfo;
    }
    public get accessInfo(): ConnectInfoAccessInfo | undefined {
        return this['access_info'];
    }
}