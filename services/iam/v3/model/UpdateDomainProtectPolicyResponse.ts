import { ProtectPolicyResult } from './ProtectPolicyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDomainProtectPolicyResponse extends SdkResponse {
    private 'protect_policy'?: ProtectPolicyResult | undefined;
    public constructor() { 
        super();
    }
    public withProtectPolicy(protectPolicy: ProtectPolicyResult): UpdateDomainProtectPolicyResponse {
        this['protect_policy'] = protectPolicy;
        return this;
    }
    public set protectPolicy(protectPolicy: ProtectPolicyResult | undefined) {
        this['protect_policy'] = protectPolicy;
    }
    public get protectPolicy() {
        return this['protect_policy'];
    }
}