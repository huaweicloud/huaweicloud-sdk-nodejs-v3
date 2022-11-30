import { L7policyResp } from './L7policyResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListL7policiesResponse extends SdkResponse {
    public l7policies?: Array<L7policyResp>;
    public constructor() { 
        super();
    }
    public withL7policies(l7policies: Array<L7policyResp>): ListL7policiesResponse {
        this['l7policies'] = l7policies;
        return this;
    }
}