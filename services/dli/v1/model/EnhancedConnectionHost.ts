

export class EnhancedConnectionHost {
    public name?: string;
    public ip?: string;
    public constructor() { 
    }
    public withName(name: string): EnhancedConnectionHost {
        this['name'] = name;
        return this;
    }
    public withIp(ip: string): EnhancedConnectionHost {
        this['ip'] = ip;
        return this;
    }
}