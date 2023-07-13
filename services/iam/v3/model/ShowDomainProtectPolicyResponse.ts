import { ShowDomainProtectPolicyResponseBodyProtectPolicy } from './ShowDomainProtectPolicyResponseBodyProtectPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainProtectPolicyResponse extends SdkResponse {
    private 'protect_policy'?: ShowDomainProtectPolicyResponseBodyProtectPolicy | undefined;
    public constructor() { 
        super();
    }
    public withProtectPolicy(protectPolicy: ShowDomainProtectPolicyResponseBodyProtectPolicy): ShowDomainProtectPolicyResponse {
        this['protect_policy'] = protectPolicy;
        return this;
    }
    public set protectPolicy(protectPolicy: ShowDomainProtectPolicyResponseBodyProtectPolicy | undefined) {
        this['protect_policy'] = protectPolicy;
    }
    public get protectPolicy() {
        return this['protect_policy'];
    }
}