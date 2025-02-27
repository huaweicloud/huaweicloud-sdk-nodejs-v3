import { AllowAddressNetmasksOption } from './AllowAddressNetmasksOption';
import { AllowAddressNetmasksOptionIPv6 } from './AllowAddressNetmasksOptionIPv6';
import { AllowIpRangesOption } from './AllowIpRangesOption';
import { AllowIpRangesOptionIPv6 } from './AllowIpRangesOptionIPv6';


export class ConsoleAclPolicyOption {
    private 'allow_address_netmasks'?: Array<AllowAddressNetmasksOption>;
    private 'allow_ip_ranges'?: Array<AllowIpRangesOption>;
    private 'allow_address_netmasks_ipv6'?: Array<AllowAddressNetmasksOptionIPv6>;
    private 'allow_ip_ranges_ipv6'?: Array<AllowIpRangesOptionIPv6>;
    public constructor() { 
    }
    public withAllowAddressNetmasks(allowAddressNetmasks: Array<AllowAddressNetmasksOption>): ConsoleAclPolicyOption {
        this['allow_address_netmasks'] = allowAddressNetmasks;
        return this;
    }
    public set allowAddressNetmasks(allowAddressNetmasks: Array<AllowAddressNetmasksOption>  | undefined) {
        this['allow_address_netmasks'] = allowAddressNetmasks;
    }
    public get allowAddressNetmasks(): Array<AllowAddressNetmasksOption> | undefined {
        return this['allow_address_netmasks'];
    }
    public withAllowIpRanges(allowIpRanges: Array<AllowIpRangesOption>): ConsoleAclPolicyOption {
        this['allow_ip_ranges'] = allowIpRanges;
        return this;
    }
    public set allowIpRanges(allowIpRanges: Array<AllowIpRangesOption>  | undefined) {
        this['allow_ip_ranges'] = allowIpRanges;
    }
    public get allowIpRanges(): Array<AllowIpRangesOption> | undefined {
        return this['allow_ip_ranges'];
    }
    public withAllowAddressNetmasksIpv6(allowAddressNetmasksIpv6: Array<AllowAddressNetmasksOptionIPv6>): ConsoleAclPolicyOption {
        this['allow_address_netmasks_ipv6'] = allowAddressNetmasksIpv6;
        return this;
    }
    public set allowAddressNetmasksIpv6(allowAddressNetmasksIpv6: Array<AllowAddressNetmasksOptionIPv6>  | undefined) {
        this['allow_address_netmasks_ipv6'] = allowAddressNetmasksIpv6;
    }
    public get allowAddressNetmasksIpv6(): Array<AllowAddressNetmasksOptionIPv6> | undefined {
        return this['allow_address_netmasks_ipv6'];
    }
    public withAllowIpRangesIpv6(allowIpRangesIpv6: Array<AllowIpRangesOptionIPv6>): ConsoleAclPolicyOption {
        this['allow_ip_ranges_ipv6'] = allowIpRangesIpv6;
        return this;
    }
    public set allowIpRangesIpv6(allowIpRangesIpv6: Array<AllowIpRangesOptionIPv6>  | undefined) {
        this['allow_ip_ranges_ipv6'] = allowIpRangesIpv6;
    }
    public get allowIpRangesIpv6(): Array<AllowIpRangesOptionIPv6> | undefined {
        return this['allow_ip_ranges_ipv6'];
    }
}