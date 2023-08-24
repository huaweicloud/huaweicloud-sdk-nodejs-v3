import { WeakPwdAccountInfoResponseInfo } from './WeakPwdAccountInfoResponseInfo';


export class WeakPwdListInfoResponseInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'weak_pwd_accounts'?: Array<WeakPwdAccountInfoResponseInfo>;
    public constructor() { 
    }
    public withHostId(hostId: string): WeakPwdListInfoResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): WeakPwdListInfoResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): WeakPwdListInfoResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withWeakPwdAccounts(weakPwdAccounts: Array<WeakPwdAccountInfoResponseInfo>): WeakPwdListInfoResponseInfo {
        this['weak_pwd_accounts'] = weakPwdAccounts;
        return this;
    }
    public set weakPwdAccounts(weakPwdAccounts: Array<WeakPwdAccountInfoResponseInfo>  | undefined) {
        this['weak_pwd_accounts'] = weakPwdAccounts;
    }
    public get weakPwdAccounts(): Array<WeakPwdAccountInfoResponseInfo> | undefined {
        return this['weak_pwd_accounts'];
    }
}