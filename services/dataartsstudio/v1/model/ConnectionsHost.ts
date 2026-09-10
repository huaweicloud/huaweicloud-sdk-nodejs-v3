

export class ConnectionsHost {
    public name?: string;
    public ip?: string;
    public constructor(name?: string, ip?: string) { 
        this['name'] = name;
        this['ip'] = ip;
    }
    public withName(name: string): ConnectionsHost {
        this['name'] = name;
        return this;
    }
    public withIp(ip: string): ConnectionsHost {
        this['ip'] = ip;
        return this;
    }
}