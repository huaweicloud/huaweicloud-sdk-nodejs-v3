

export class AccessControlRule {
    public ip?: string;
    public description?: string;
    public constructor(ip?: string) { 
        this['ip'] = ip;
    }
    public withIp(ip: string): AccessControlRule {
        this['ip'] = ip;
        return this;
    }
    public withDescription(description: string): AccessControlRule {
        this['description'] = description;
        return this;
    }
}