

export class IpGroupIp {
    public ip: string;
    public constructor(ip?: any) { 
        this['ip'] = ip;
    }
    public withIp(ip: string): IpGroupIp {
        this['ip'] = ip;
        return this;
    }
}