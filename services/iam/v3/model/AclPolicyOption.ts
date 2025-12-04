import { AllowAddressNetmasksOption } from './AllowAddressNetmasksOption';
import { AllowIpRangesOption } from './AllowIpRangesOption';
import { AllowVpcEndpointsResult } from './AllowVpcEndpointsResult';


export class AclPolicyOption {
    private 'allow_address_netmasks'?: Array<AllowAddressNetmasksOption>;
    private 'allow_ip_ranges'?: Array<AllowIpRangesOption>;
    private 'allow_vpc_endpoints'?: Array<AllowVpcEndpointsResult>;
    public constructor() { 
    }
    public withAllowAddressNetmasks(allowAddressNetmasks: Array<AllowAddressNetmasksOption>): AclPolicyOption {
        this['allow_address_netmasks'] = allowAddressNetmasks;
        return this;
    }
    public set allowAddressNetmasks(allowAddressNetmasks: Array<AllowAddressNetmasksOption>  | undefined) {
        this['allow_address_netmasks'] = allowAddressNetmasks;
    }
    public get allowAddressNetmasks(): Array<AllowAddressNetmasksOption> | undefined {
        return this['allow_address_netmasks'];
    }
    public withAllowIpRanges(allowIpRanges: Array<AllowIpRangesOption>): AclPolicyOption {
        this['allow_ip_ranges'] = allowIpRanges;
        return this;
    }
    public set allowIpRanges(allowIpRanges: Array<AllowIpRangesOption>  | undefined) {
        this['allow_ip_ranges'] = allowIpRanges;
    }
    public get allowIpRanges(): Array<AllowIpRangesOption> | undefined {
        return this['allow_ip_ranges'];
    }
    public withAllowVpcEndpoints(allowVpcEndpoints: Array<AllowVpcEndpointsResult>): AclPolicyOption {
        this['allow_vpc_endpoints'] = allowVpcEndpoints;
        return this;
    }
    public set allowVpcEndpoints(allowVpcEndpoints: Array<AllowVpcEndpointsResult>  | undefined) {
        this['allow_vpc_endpoints'] = allowVpcEndpoints;
    }
    public get allowVpcEndpoints(): Array<AllowVpcEndpointsResult> | undefined {
        return this['allow_vpc_endpoints'];
    }
}