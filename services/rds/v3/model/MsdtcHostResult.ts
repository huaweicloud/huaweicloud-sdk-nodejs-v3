

export class MsdtcHostResult {
    private 'host_name'?: string;
    public ip?: string;
    public constructor(hostName?: string, ip?: string) { 
        this['host_name'] = hostName;
        this['ip'] = ip;
    }
    public withHostName(hostName: string): MsdtcHostResult {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withIp(ip: string): MsdtcHostResult {
        this['ip'] = ip;
        return this;
    }
}