

export class CreateIpGroupIpOption {
    public ip: string;
    public description?: string;
    public constructor(ip?: any) { 
        this['ip'] = ip;
    }
    public withIp(ip: string): CreateIpGroupIpOption {
        this['ip'] = ip;
        return this;
    }
    public withDescription(description: string): CreateIpGroupIpOption {
        this['description'] = description;
        return this;
    }
}