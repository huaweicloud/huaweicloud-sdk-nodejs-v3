import { AllowAddressNetmasksResult } from './AllowAddressNetmasksResult';
import { AllowAddressNetmasksResultIPv6 } from './AllowAddressNetmasksResultIPv6';
import { AllowIpRangesResult } from './AllowIpRangesResult';
import { AllowIpRangesResultIPv6 } from './AllowIpRangesResultIPv6';


export class ConsoleAclPolicyResult {
    private 'allow_address_netmasks'?: Array<AllowAddressNetmasksResult>;
    private 'allow_ip_ranges'?: Array<AllowIpRangesResult>;
    private 'allow_address_netmasks_ipv6'?: Array<AllowAddressNetmasksResultIPv6>;
    private 'allow_ip_ranges_ipv6'?: Array<AllowIpRangesResultIPv6>;
    public constructor() { 
    }
    public withAllowAddressNetmasks(allowAddressNetmasks: Array<AllowAddressNetmasksResult>): ConsoleAclPolicyResult {
        this['allow_address_netmasks'] = allowAddressNetmasks;
        return this;
    }
    public set allowAddressNetmasks(allowAddressNetmasks: Array<AllowAddressNetmasksResult>  | undefined) {
        this['allow_address_netmasks'] = allowAddressNetmasks;
    }
    public get allowAddressNetmasks(): Array<AllowAddressNetmasksResult> | undefined {
        return this['allow_address_netmasks'];
    }
    public withAllowIpRanges(allowIpRanges: Array<AllowIpRangesResult>): ConsoleAclPolicyResult {
        this['allow_ip_ranges'] = allowIpRanges;
        return this;
    }
    public set allowIpRanges(allowIpRanges: Array<AllowIpRangesResult>  | undefined) {
        this['allow_ip_ranges'] = allowIpRanges;
    }
    public get allowIpRanges(): Array<AllowIpRangesResult> | undefined {
        return this['allow_ip_ranges'];
    }
    public withAllowAddressNetmasksIpv6(allowAddressNetmasksIpv6: Array<AllowAddressNetmasksResultIPv6>): ConsoleAclPolicyResult {
        this['allow_address_netmasks_ipv6'] = allowAddressNetmasksIpv6;
        return this;
    }
    public set allowAddressNetmasksIpv6(allowAddressNetmasksIpv6: Array<AllowAddressNetmasksResultIPv6>  | undefined) {
        this['allow_address_netmasks_ipv6'] = allowAddressNetmasksIpv6;
    }
    public get allowAddressNetmasksIpv6(): Array<AllowAddressNetmasksResultIPv6> | undefined {
        return this['allow_address_netmasks_ipv6'];
    }
    public withAllowIpRangesIpv6(allowIpRangesIpv6: Array<AllowIpRangesResultIPv6>): ConsoleAclPolicyResult {
        this['allow_ip_ranges_ipv6'] = allowIpRangesIpv6;
        return this;
    }
    public set allowIpRangesIpv6(allowIpRangesIpv6: Array<AllowIpRangesResultIPv6>  | undefined) {
        this['allow_ip_ranges_ipv6'] = allowIpRangesIpv6;
    }
    public get allowIpRangesIpv6(): Array<AllowIpRangesResultIPv6> | undefined {
        return this['allow_ip_ranges_ipv6'];
    }
}