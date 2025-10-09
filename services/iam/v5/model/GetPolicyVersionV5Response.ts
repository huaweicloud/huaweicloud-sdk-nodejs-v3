import { PolicyVersion } from './PolicyVersion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetPolicyVersionV5Response extends SdkResponse {
    private 'policy_version'?: PolicyVersion;
    public constructor() { 
        super();
    }
    public withPolicyVersion(policyVersion: PolicyVersion): GetPolicyVersionV5Response {
        this['policy_version'] = policyVersion;
        return this;
    }
    public set policyVersion(policyVersion: PolicyVersion  | undefined) {
        this['policy_version'] = policyVersion;
    }
    public get policyVersion(): PolicyVersion | undefined {
        return this['policy_version'];
    }
}