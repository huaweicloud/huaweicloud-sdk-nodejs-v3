import { VaultPolicyResp } from './VaultPolicyResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateVaultPolicyResponse extends SdkResponse {
    private 'associate_policy'?: VaultPolicyResp | undefined;
    public constructor() { 
        super();
    }
    public withAssociatePolicy(associatePolicy: VaultPolicyResp): AssociateVaultPolicyResponse {
        this['associate_policy'] = associatePolicy;
        return this;
    }
    public set associatePolicy(associatePolicy: VaultPolicyResp | undefined) {
        this['associate_policy'] = associatePolicy;
    }
    public get associatePolicy() {
        return this['associate_policy'];
    }
}