

export class IpInfo {
    public ip?: string;
    public constructor() { 
    }
    public withIp(ip: string): IpInfo {
        this['ip'] = ip;
        return this;
    }
}