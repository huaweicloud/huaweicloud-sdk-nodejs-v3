import { VaultPolicyResp } from './VaultPolicyResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisassociateVaultPolicyResponse extends SdkResponse {
    private 'dissociate_policy'?: VaultPolicyResp | undefined;
    public constructor() { 
        super();
    }
    public withDissociatePolicy(dissociatePolicy: VaultPolicyResp): DisassociateVaultPolicyResponse {
        this['dissociate_policy'] = dissociatePolicy;
        return this;
    }
    public set dissociatePolicy(dissociatePolicy: VaultPolicyResp | undefined) {
        this['dissociate_policy'] = dissociatePolicy;
    }
    public get dissociatePolicy() {
        return this['dissociate_policy'];
    }
}