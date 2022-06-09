import { L7policyResp } from './L7policyResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateL7policyResponse extends SdkResponse {
    public l7policy?: L7policyResp;
    public constructor() { 
        super();
    }
    public withL7policy(l7policy: L7policyResp): CreateL7policyResponse {
        this['l7policy'] = l7policy;
        return this;
    }
}