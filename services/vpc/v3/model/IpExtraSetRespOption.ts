

export class IpExtraSetRespOption {
    public ip?: string;
    public remarks?: string;
    public constructor(ip?: string, remarks?: string) { 
        this['ip'] = ip;
        this['remarks'] = remarks;
    }
    public withIp(ip: string): IpExtraSetRespOption {
        this['ip'] = ip;
        return this;
    }
    public withRemarks(remarks: string): IpExtraSetRespOption {
        this['remarks'] = remarks;
        return this;
    }
}