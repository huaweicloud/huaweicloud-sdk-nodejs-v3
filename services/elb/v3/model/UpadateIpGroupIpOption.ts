

export class UpadateIpGroupIpOption {
    public ip: string;
    public description?: string;
    public constructor(ip?: any) { 
        this['ip'] = ip;
    }
    public withIp(ip: string): UpadateIpGroupIpOption {
        this['ip'] = ip;
        return this;
    }
    public withDescription(description: string): UpadateIpGroupIpOption {
        this['description'] = description;
        return this;
    }
}