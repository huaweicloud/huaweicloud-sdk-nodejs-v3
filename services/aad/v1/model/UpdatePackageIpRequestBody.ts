import { UpdateProtectedIpInPolicyBody } from './UpdateProtectedIpInPolicyBody';


export class UpdatePackageIpRequestBody {
    private 'protected_ip_list'?: Array<UpdateProtectedIpInPolicyBody>;
    public constructor(protectedIpList?: Array<UpdateProtectedIpInPolicyBody>) { 
        this['protected_ip_list'] = protectedIpList;
    }
    public withProtectedIpList(protectedIpList: Array<UpdateProtectedIpInPolicyBody>): UpdatePackageIpRequestBody {
        this['protected_ip_list'] = protectedIpList;
        return this;
    }
    public set protectedIpList(protectedIpList: Array<UpdateProtectedIpInPolicyBody>  | undefined) {
        this['protected_ip_list'] = protectedIpList;
    }
    public get protectedIpList(): Array<UpdateProtectedIpInPolicyBody> | undefined {
        return this['protected_ip_list'];
    }
}