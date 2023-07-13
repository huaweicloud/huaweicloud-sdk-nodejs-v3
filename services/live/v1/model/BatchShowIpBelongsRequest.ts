

export class BatchShowIpBelongsRequest {
    public ip: Array<string>;
    public constructor(ip?: any) { 
        this['ip'] = ip;
    }
    public withIp(ip: Array<string>): BatchShowIpBelongsRequest {
        this['ip'] = ip;
        return this;
    }
}