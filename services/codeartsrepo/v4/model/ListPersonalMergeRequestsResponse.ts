import { MergeRequestListBasicDto } from './MergeRequestListBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPersonalMergeRequestsResponse extends SdkResponse {
    public body?: Array<MergeRequestListBasicDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MergeRequestListBasicDto>): ListPersonalMergeRequestsResponse {
        this['body'] = body;
        return this;
    }
}