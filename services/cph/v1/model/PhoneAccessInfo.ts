

export class PhoneAccessInfo {
    public type?: string;
    private 'device_ip'?: string;
    private 'phone_ip'?: string;
    private 'listen_port'?: number;
    private 'access_ip'?: string;
    private 'public_ip'?: string;
    private 'intranet_ip'?: string;
    private 'server_ip'?: string;
    private 'access_port'?: number;
    private 'phone_ipv6'?: string;
    private 'server_ipv6'?: string;
    public constructor() { 
    }
    public withType(type: string): PhoneAccessInfo {
        this['type'] = type;
        return this;
    }
    public withDeviceIp(deviceIp: string): PhoneAccessInfo {
        this['device_ip'] = deviceIp;
        return this;
    }
    public set deviceIp(deviceIp: string  | undefined) {
        this['device_ip'] = deviceIp;
    }
    public get deviceIp(): string | undefined {
        return this['device_ip'];
    }
    public withPhoneIp(phoneIp: string): PhoneAccessInfo {
        this['phone_ip'] = phoneIp;
        return this;
    }
    public set phoneIp(phoneIp: string  | undefined) {
        this['phone_ip'] = phoneIp;
    }
    public get phoneIp(): string | undefined {
        return this['phone_ip'];
    }
    public withListenPort(listenPort: number): PhoneAccessInfo {
        this['listen_port'] = listenPort;
        return this;
    }
    public set listenPort(listenPort: number  | undefined) {
        this['listen_port'] = listenPort;
    }
    public get listenPort(): number | undefined {
        return this['listen_port'];
    }
    public withAccessIp(accessIp: string): PhoneAccessInfo {
        this['access_ip'] = accessIp;
        return this;
    }
    public set accessIp(accessIp: string  | undefined) {
        this['access_ip'] = accessIp;
    }
    public get accessIp(): string | undefined {
        return this['access_ip'];
    }
    public withPublicIp(publicIp: string): PhoneAccessInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withIntranetIp(intranetIp: string): PhoneAccessInfo {
        this['intranet_ip'] = intranetIp;
        return this;
    }
    public set intranetIp(intranetIp: string  | undefined) {
        this['intranet_ip'] = intranetIp;
    }
    public get intranetIp(): string | undefined {
        return this['intranet_ip'];
    }
    public withServerIp(serverIp: string): PhoneAccessInfo {
        this['server_ip'] = serverIp;
        return this;
    }
    public set serverIp(serverIp: string  | undefined) {
        this['server_ip'] = serverIp;
    }
    public get serverIp(): string | undefined {
        return this['server_ip'];
    }
    public withAccessPort(accessPort: number): PhoneAccessInfo {
        this['access_port'] = accessPort;
        return this;
    }
    public set accessPort(accessPort: number  | undefined) {
        this['access_port'] = accessPort;
    }
    public get accessPort(): number | undefined {
        return this['access_port'];
    }
    public withPhoneIpv6(phoneIpv6: string): PhoneAccessInfo {
        this['phone_ipv6'] = phoneIpv6;
        return this;
    }
    public set phoneIpv6(phoneIpv6: string  | undefined) {
        this['phone_ipv6'] = phoneIpv6;
    }
    public get phoneIpv6(): string | undefined {
        return this['phone_ipv6'];
    }
    public withServerIpv6(serverIpv6: string): PhoneAccessInfo {
        this['server_ipv6'] = serverIpv6;
        return this;
    }
    public set serverIpv6(serverIpv6: string  | undefined) {
        this['server_ipv6'] = serverIpv6;
    }
    public get serverIpv6(): string | undefined {
        return this['server_ipv6'];
    }
}