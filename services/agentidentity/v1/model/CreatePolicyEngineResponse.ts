import { PolicyEngine } from './PolicyEngine';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePolicyEngineResponse extends SdkResponse {
    private 'policy_engine'?: PolicyEngine;
    public constructor() { 
        super();
    }
    public withPolicyEngine(policyEngine: PolicyEngine): CreatePolicyEngineResponse {
        this['policy_engine'] = policyEngine;
        return this;
    }
    public set policyEngine(policyEngine: PolicyEngine  | undefined) {
        this['policy_engine'] = policyEngine;
    }
    public get policyEngine(): PolicyEngine | undefined {
        return this['policy_engine'];
    }
}