

export class IpInfo {
    public ip?: string;
    public description?: string;
    public constructor(ip?: string) { 
        this['ip'] = ip;
    }
    public withIp(ip: string): IpInfo {
        this['ip'] = ip;
        return this;
    }
    public withDescription(description: string): IpInfo {
        this['description'] = description;
        return this;
    }
}