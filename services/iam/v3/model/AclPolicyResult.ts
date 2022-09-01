import { AllowAddressNetmasksResult } from './AllowAddressNetmasksResult';
import { AllowIpRangesResult } from './AllowIpRangesResult';


export class AclPolicyResult {
    private 'allow_address_netmasks'?: Array<AllowAddressNetmasksResult> | undefined;
    private 'allow_ip_ranges'?: Array<AllowIpRangesResult> | undefined;
    public constructor() { 
    }
    public withAllowAddressNetmasks(allowAddressNetmasks: Array<AllowAddressNetmasksResult>): AclPolicyResult {
        this['allow_address_netmasks'] = allowAddressNetmasks;
        return this;
    }
    public set allowAddressNetmasks(allowAddressNetmasks: Array<AllowAddressNetmasksResult> | undefined) {
        this['allow_address_netmasks'] = allowAddressNetmasks;
    }
    public get allowAddressNetmasks() {
        return this['allow_address_netmasks'];
    }
    public withAllowIpRanges(allowIpRanges: Array<AllowIpRangesResult>): AclPolicyResult {
        this['allow_ip_ranges'] = allowIpRanges;
        return this;
    }
    public set allowIpRanges(allowIpRanges: Array<AllowIpRangesResult> | undefined) {
        this['allow_ip_ranges'] = allowIpRanges;
    }
    public get allowIpRanges() {
        return this['allow_ip_ranges'];
    }
}