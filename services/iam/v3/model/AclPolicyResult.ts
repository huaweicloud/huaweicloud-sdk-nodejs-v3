import { AllowAddressNetmasksResult } from './AllowAddressNetmasksResult';
import { AllowIpRangesResult } from './AllowIpRangesResult';


export class AclPolicyResult {
    private 'allow_address_netmasks'?: Array<AllowAddressNetmasksResult>;
    private 'allow_ip_ranges'?: Array<AllowIpRangesResult>;
    public constructor() { 
    }
    public withAllowAddressNetmasks(allowAddressNetmasks: Array<AllowAddressNetmasksResult>): AclPolicyResult {
        this['allow_address_netmasks'] = allowAddressNetmasks;
        return this;
    }
    public set allowAddressNetmasks(allowAddressNetmasks: Array<AllowAddressNetmasksResult>  | undefined) {
        this['allow_address_netmasks'] = allowAddressNetmasks;
    }
    public get allowAddressNetmasks(): Array<AllowAddressNetmasksResult> | undefined {
        return this['allow_address_netmasks'];
    }
    public withAllowIpRanges(allowIpRanges: Array<AllowIpRangesResult>): AclPolicyResult {
        this['allow_ip_ranges'] = allowIpRanges;
        return this;
    }
    public set allowIpRanges(allowIpRanges: Array<AllowIpRangesResult>  | undefined) {
        this['allow_ip_ranges'] = allowIpRanges;
    }
    public get allowIpRanges(): Array<AllowIpRangesResult> | undefined {
        return this['allow_ip_ranges'];
    }
}