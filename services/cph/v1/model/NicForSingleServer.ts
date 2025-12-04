

export class NicForSingleServer {
    private 'subnet_id'?: string;
    private 'ipv6_enable'?: boolean;
    private 'ipv6_band_width_id'?: string;
    public constructor(subnetId?: string) { 
        this['subnet_id'] = subnetId;
    }
    public withSubnetId(subnetId: string): NicForSingleServer {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withIpv6Enable(ipv6Enable: boolean): NicForSingleServer {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withIpv6BandWidthId(ipv6BandWidthId: string): NicForSingleServer {
        this['ipv6_band_width_id'] = ipv6BandWidthId;
        return this;
    }
    public set ipv6BandWidthId(ipv6BandWidthId: string  | undefined) {
        this['ipv6_band_width_id'] = ipv6BandWidthId;
    }
    public get ipv6BandWidthId(): string | undefined {
        return this['ipv6_band_width_id'];
    }
}