

export class NetAddress {
    public ip?: string;
    public port?: number;
    public domain?: string;
    public constructor() { 
    }
    public withIp(ip: string): NetAddress {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: number): NetAddress {
        this['port'] = port;
        return this;
    }
    public withDomain(domain: string): NetAddress {
        this['domain'] = domain;
        return this;
    }
}