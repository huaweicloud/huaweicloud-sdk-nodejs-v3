import { ListGovernancePolicyResponseBody } from './ListGovernancePolicyResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGovernancePolicyResponse extends SdkResponse {
    public body?: Array<ListGovernancePolicyResponseBody>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ListGovernancePolicyResponseBody>): ListGovernancePolicyResponse {
        this['body'] = body;
        return this;
    }
}