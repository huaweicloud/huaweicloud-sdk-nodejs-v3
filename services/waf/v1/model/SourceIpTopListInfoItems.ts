

export class SourceIpTopListInfoItems {
    public ip?: string;
    public num?: number;
    public constructor() { 
    }
    public withIp(ip: string): SourceIpTopListInfoItems {
        this['ip'] = ip;
        return this;
    }
    public withNum(num: number): SourceIpTopListInfoItems {
        this['num'] = num;
        return this;
    }
}