

export class Nic {
    public eth?: string;
    public ip?: string;
    public constructor() { 
    }
    public withEth(eth: string): Nic {
        this['eth'] = eth;
        return this;
    }
    public withIp(ip: string): Nic {
        this['ip'] = ip;
        return this;
    }
}