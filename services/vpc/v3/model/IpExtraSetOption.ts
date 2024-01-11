

export class IpExtraSetOption {
    public ip?: string;
    public remarks?: string;
    public constructor(ip?: string) { 
        this['ip'] = ip;
    }
    public withIp(ip: string): IpExtraSetOption {
        this['ip'] = ip;
        return this;
    }
    public withRemarks(remarks: string): IpExtraSetOption {
        this['remarks'] = remarks;
        return this;
    }
}