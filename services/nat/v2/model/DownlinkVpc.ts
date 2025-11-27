

export class DownlinkVpc {
    private 'vpc_id'?: string;
    private 'virsubnet_id'?: string;
    private 'ngport_ip_address'?: string;
    public constructor(vpcId?: string, virsubnetId?: string) { 
        this['vpc_id'] = vpcId;
        this['virsubnet_id'] = virsubnetId;
    }
    public withVpcId(vpcId: string): DownlinkVpc {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVirsubnetId(virsubnetId: string): DownlinkVpc {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withNgportIpAddress(ngportIpAddress: string): DownlinkVpc {
        this['ngport_ip_address'] = ngportIpAddress;
        return this;
    }
    public set ngportIpAddress(ngportIpAddress: string  | undefined) {
        this['ngport_ip_address'] = ngportIpAddress;
    }
    public get ngportIpAddress(): string | undefined {
        return this['ngport_ip_address'];
    }
}