

export class IpGroupsDetail {
    public ip?: string;
    public description?: string;
    public constructor(ip?: string, description?: string) { 
        this['ip'] = ip;
        this['description'] = description;
    }
    public withIp(ip: string): IpGroupsDetail {
        this['ip'] = ip;
        return this;
    }
    public withDescription(description: string): IpGroupsDetail {
        this['description'] = description;
        return this;
    }
}