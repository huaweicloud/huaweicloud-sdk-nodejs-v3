

export class EnhancedConnectionsHost {
    public name?: string;
    public ip?: string;
    public constructor() { 
    }
    public withName(name: string): EnhancedConnectionsHost {
        this['name'] = name;
        return this;
    }
    public withIp(ip: string): EnhancedConnectionsHost {
        this['ip'] = ip;
        return this;
    }
}