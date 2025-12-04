

export class EncodeServerAccessInfo {
    private 'listen_port'?: number;
    private 'access_ip'?: string;
    private 'intranet_ip'?: string;
    private 'public_ip'?: string;
    private 'server_ip'?: string;
    private 'access_port'?: number;
    public type?: string;
    private 'server_ipv6'?: string;
    public constructor() { 
    }
    public withListenPort(listenPort: number): EncodeServerAccessInfo {
        this['listen_port'] = listenPort;
        return this;
    }
    public set listenPort(listenPort: number  | undefined) {
        this['listen_port'] = listenPort;
    }
    public get listenPort(): number | undefined {
        return this['listen_port'];
    }
    public withAccessIp(accessIp: string): EncodeServerAccessInfo {
        this['access_ip'] = accessIp;
        return this;
    }
    public set accessIp(accessIp: string  | undefined) {
        this['access_ip'] = accessIp;
    }
    public get accessIp(): string | undefined {
        return this['access_ip'];
    }
    public withIntranetIp(intranetIp: string): EncodeServerAccessInfo {
        this['intranet_ip'] = intranetIp;
        return this;
    }
    public set intranetIp(intranetIp: string  | undefined) {
        this['intranet_ip'] = intranetIp;
    }
    public get intranetIp(): string | undefined {
        return this['intranet_ip'];
    }
    public withPublicIp(publicIp: string): EncodeServerAccessInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withServerIp(serverIp: string): EncodeServerAccessInfo {
        this['server_ip'] = serverIp;
        return this;
    }
    public set serverIp(serverIp: string  | undefined) {
        this['server_ip'] = serverIp;
    }
    public get serverIp(): string | undefined {
        return this['server_ip'];
    }
    public withAccessPort(accessPort: number): EncodeServerAccessInfo {
        this['access_port'] = accessPort;
        return this;
    }
    public set accessPort(accessPort: number  | undefined) {
        this['access_port'] = accessPort;
    }
    public get accessPort(): number | undefined {
        return this['access_port'];
    }
    public withType(type: string): EncodeServerAccessInfo {
        this['type'] = type;
        return this;
    }
    public withServerIpv6(serverIpv6: string): EncodeServerAccessInfo {
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