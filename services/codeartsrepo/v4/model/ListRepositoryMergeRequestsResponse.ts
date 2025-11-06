import { MergeRequestListBasicDto } from './MergeRequestListBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryMergeRequestsResponse extends SdkResponse {
    public body?: Array<MergeRequestListBasicDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MergeRequestListBasicDto>): ListRepositoryMergeRequestsResponse {
        this['body'] = body;
        return this;
    }
}