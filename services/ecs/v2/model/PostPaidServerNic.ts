import { PostPaidServerIpv6Bandwidth } from './PostPaidServerIpv6Bandwidth';


export class PostPaidServerNic {
    private 'subnet_id': string | undefined;
    private 'ip_address'?: string | undefined;
    private 'ipv6_enable'?: boolean | undefined;
    private 'ipv6_bandwidth'?: PostPaidServerIpv6Bandwidth | undefined;
    public constructor(subnetId?: any) { 
        this['subnet_id'] = subnetId;
    }
    public withSubnetId(subnetId: string): PostPaidServerNic {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withIpAddress(ipAddress: string): PostPaidServerNic {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress() {
        return this['ip_address'];
    }
    public withIpv6Enable(ipv6Enable: boolean): PostPaidServerNic {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable() {
        return this['ipv6_enable'];
    }
    public withIpv6Bandwidth(ipv6Bandwidth: PostPaidServerIpv6Bandwidth): PostPaidServerNic {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
        return this;
    }
    public set ipv6Bandwidth(ipv6Bandwidth: PostPaidServerIpv6Bandwidth | undefined) {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
    }
    public get ipv6Bandwidth() {
        return this['ipv6_bandwidth'];
    }
}