

export class UpdateDcVncRequestBody {
    private 'dc_vnc_ip'?: string;
    private 'center_subnet_id'?: string;
    public constructor(dcVncIp?: string) { 
        this['dc_vnc_ip'] = dcVncIp;
    }
    public withDcVncIp(dcVncIp: string): UpdateDcVncRequestBody {
        this['dc_vnc_ip'] = dcVncIp;
        return this;
    }
    public set dcVncIp(dcVncIp: string  | undefined) {
        this['dc_vnc_ip'] = dcVncIp;
    }
    public get dcVncIp(): string | undefined {
        return this['dc_vnc_ip'];
    }
    public withCenterSubnetId(centerSubnetId: string): UpdateDcVncRequestBody {
        this['center_subnet_id'] = centerSubnetId;
        return this;
    }
    public set centerSubnetId(centerSubnetId: string  | undefined) {
        this['center_subnet_id'] = centerSubnetId;
    }
    public get centerSubnetId(): string | undefined {
        return this['center_subnet_id'];
    }
}