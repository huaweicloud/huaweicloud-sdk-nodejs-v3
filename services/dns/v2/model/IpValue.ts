

export class IpValue {
    public ip?: string;
    public constructor() { 
    }
    public withIp(ip: string): IpValue {
        this['ip'] = ip;
        return this;
    }
}