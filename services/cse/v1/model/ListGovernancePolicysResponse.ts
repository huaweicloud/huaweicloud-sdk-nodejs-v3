import { ListGovernancePolicyResponseBody } from './ListGovernancePolicyResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGovernancePolicysResponse extends SdkResponse {
    public body?: Array<ListGovernancePolicyResponseBody>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ListGovernancePolicyResponseBody>): ListGovernancePolicysResponse {
        this['body'] = body;
        return this;
    }
}