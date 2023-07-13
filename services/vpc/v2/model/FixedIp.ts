

export class FixedIp {
    private 'ip_address'?: string | undefined;
    private 'subnet_id'?: string | undefined;
    public constructor() { 
    }
    public withIpAddress(ipAddress: string): FixedIp {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress() {
        return this['ip_address'];
    }
    public withSubnetId(subnetId: string): FixedIp {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
}