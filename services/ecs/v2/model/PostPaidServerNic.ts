import { CreateServerNicAllowedAddressPairs } from './CreateServerNicAllowedAddressPairs';
import { PostPaidServerIpv6Bandwidth } from './PostPaidServerIpv6Bandwidth';


export class PostPaidServerNic {
    private 'subnet_id'?: string;
    private 'ip_address'?: string;
    private 'ipv6_enable'?: boolean;
    private 'ipv6_bandwidth'?: PostPaidServerIpv6Bandwidth;
    private 'allowed_address_pairs'?: Array<CreateServerNicAllowedAddressPairs>;
    public constructor(subnetId?: string) { 
        this['subnet_id'] = subnetId;
    }
    public withSubnetId(subnetId: string): PostPaidServerNic {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withIpAddress(ipAddress: string): PostPaidServerNic {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withIpv6Enable(ipv6Enable: boolean): PostPaidServerNic {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withIpv6Bandwidth(ipv6Bandwidth: PostPaidServerIpv6Bandwidth): PostPaidServerNic {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
        return this;
    }
    public set ipv6Bandwidth(ipv6Bandwidth: PostPaidServerIpv6Bandwidth  | undefined) {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
    }
    public get ipv6Bandwidth(): PostPaidServerIpv6Bandwidth | undefined {
        return this['ipv6_bandwidth'];
    }
    public withAllowedAddressPairs(allowedAddressPairs: Array<CreateServerNicAllowedAddressPairs>): PostPaidServerNic {
        this['allowed_address_pairs'] = allowedAddressPairs;
        return this;
    }
    public set allowedAddressPairs(allowedAddressPairs: Array<CreateServerNicAllowedAddressPairs>  | undefined) {
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public get allowedAddressPairs(): Array<CreateServerNicAllowedAddressPairs> | undefined {
        return this['allowed_address_pairs'];
    }
}