import { PolicyWithTags } from './PolicyWithTags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetPolicyV5Response extends SdkResponse {
    public policy?: PolicyWithTags;
    public constructor() { 
        super();
    }
    public withPolicy(policy: PolicyWithTags): GetPolicyV5Response {
        this['policy'] = policy;
        return this;
    }
}