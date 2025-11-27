

export class DownlinkVpcOption {
    private 'virsubnet_id'?: string;
    private 'ngport_ip_address'?: string;
    public constructor(virsubnetId?: string) { 
        this['virsubnet_id'] = virsubnetId;
    }
    public withVirsubnetId(virsubnetId: string): DownlinkVpcOption {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withNgportIpAddress(ngportIpAddress: string): DownlinkVpcOption {
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