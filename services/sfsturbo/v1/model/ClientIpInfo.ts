

export class ClientIpInfo {
    public ips?: string;
    public constructor() { 
    }
    public withIps(ips: string): ClientIpInfo {
        this['ips'] = ips;
        return this;
    }
}