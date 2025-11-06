import { MergeRequestDiscussionDto } from './MergeRequestDiscussionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestDiscussionsResponse extends SdkResponse {
    public body?: Array<MergeRequestDiscussionDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MergeRequestDiscussionDto>): ListMergeRequestDiscussionsResponse {
        this['body'] = body;
        return this;
    }
}