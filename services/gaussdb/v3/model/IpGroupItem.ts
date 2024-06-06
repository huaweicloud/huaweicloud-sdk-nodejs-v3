

export class IpGroupItem {
    public ip?: string;
    public description?: string;
    public constructor(ip?: string, description?: string) { 
        this['ip'] = ip;
        this['description'] = description;
    }
    public withIp(ip: string): IpGroupItem {
        this['ip'] = ip;
        return this;
    }
    public withDescription(description: string): IpGroupItem {
        this['description'] = description;
        return this;
    }
}