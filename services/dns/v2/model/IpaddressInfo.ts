

export class IpaddressInfo {
    private 'subnet_id'?: string;
    public ip?: string;
    public constructor(subnetId?: string) { 
        this['subnet_id'] = subnetId;
    }
    public withSubnetId(subnetId: string): IpaddressInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withIp(ip: string): IpaddressInfo {
        this['ip'] = ip;
        return this;
    }
}