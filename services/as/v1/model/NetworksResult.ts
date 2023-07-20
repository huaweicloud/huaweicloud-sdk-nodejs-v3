import { AllowedAddressPair } from './AllowedAddressPair';
import { Ipv6Bandwidth } from './Ipv6Bandwidth';


export class NetworksResult {
    public id?: string;
    private 'ipv6_enable'?: boolean;
    private 'ipv6_bandwidth'?: Ipv6Bandwidth;
    private 'allowed_address_pairs'?: Array<AllowedAddressPair>;
    public constructor() { 
    }
    public withId(id: string): NetworksResult {
        this['id'] = id;
        return this;
    }
    public withIpv6Enable(ipv6Enable: boolean): NetworksResult {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withIpv6Bandwidth(ipv6Bandwidth: Ipv6Bandwidth): NetworksResult {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
        return this;
    }
    public set ipv6Bandwidth(ipv6Bandwidth: Ipv6Bandwidth  | undefined) {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
    }
    public get ipv6Bandwidth(): Ipv6Bandwidth | undefined {
        return this['ipv6_bandwidth'];
    }
    public withAllowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>): NetworksResult {
        this['allowed_address_pairs'] = allowedAddressPairs;
        return this;
    }
    public set allowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>  | undefined) {
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public get allowedAddressPairs(): Array<AllowedAddressPair> | undefined {
        return this['allowed_address_pairs'];
    }
}