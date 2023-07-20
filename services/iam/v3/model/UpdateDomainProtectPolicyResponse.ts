import { UpdateDomainProtectPolicyResponseBodyProtectPolicy } from './UpdateDomainProtectPolicyResponseBodyProtectPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDomainProtectPolicyResponse extends SdkResponse {
    private 'protect_policy'?: UpdateDomainProtectPolicyResponseBodyProtectPolicy;
    public constructor() { 
        super();
    }
    public withProtectPolicy(protectPolicy: UpdateDomainProtectPolicyResponseBodyProtectPolicy): UpdateDomainProtectPolicyResponse {
        this['protect_policy'] = protectPolicy;
        return this;
    }
    public set protectPolicy(protectPolicy: UpdateDomainProtectPolicyResponseBodyProtectPolicy  | undefined) {
        this['protect_policy'] = protectPolicy;
    }
    public get protectPolicy(): UpdateDomainProtectPolicyResponseBodyProtectPolicy | undefined {
        return this['protect_policy'];
    }
}