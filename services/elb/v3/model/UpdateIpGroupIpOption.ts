

export class UpdateIpGroupIpOption {
    public ip?: string;
    public description?: string;
    public constructor(ip?: string) { 
        this['ip'] = ip;
    }
    public withIp(ip: string): UpdateIpGroupIpOption {
        this['ip'] = ip;
        return this;
    }
    public withDescription(description: string): UpdateIpGroupIpOption {
        this['description'] = description;
        return this;
    }
}