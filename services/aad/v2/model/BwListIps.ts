

export class BwListIps {
    public ip?: string;
    public desc?: string;
    public constructor() { 
    }
    public withIp(ip: string): BwListIps {
        this['ip'] = ip;
        return this;
    }
    public withDesc(desc: string): BwListIps {
        this['desc'] = desc;
        return this;
    }
}