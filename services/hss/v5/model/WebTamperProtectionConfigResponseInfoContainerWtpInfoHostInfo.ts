

export class WebTamperProtectionConfigResponseInfoContainerWtpInfoHostInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_private_ip'?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): WebTamperProtectionConfigResponseInfoContainerWtpInfoHostInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): WebTamperProtectionConfigResponseInfoContainerWtpInfoHostInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostPrivateIp(hostPrivateIp: string): WebTamperProtectionConfigResponseInfoContainerWtpInfoHostInfo {
        this['host_private_ip'] = hostPrivateIp;
        return this;
    }
    public set hostPrivateIp(hostPrivateIp: string  | undefined) {
        this['host_private_ip'] = hostPrivateIp;
    }
    public get hostPrivateIp(): string | undefined {
        return this['host_private_ip'];
    }
}