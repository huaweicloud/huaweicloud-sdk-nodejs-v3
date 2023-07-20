import { DiskAutoExpansionPolicy } from './DiskAutoExpansionPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoEnlargePolicyResponse extends SdkResponse {
    public policy?: DiskAutoExpansionPolicy;
    public constructor() { 
        super();
    }
    public withPolicy(policy: DiskAutoExpansionPolicy): ShowAutoEnlargePolicyResponse {
        this['policy'] = policy;
        return this;
    }
}