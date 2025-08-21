import { MergeRequestVoteReviewerDto } from './MergeRequestVoteReviewerDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectMergeRequestCanBeAssignedReviewersResponse extends SdkResponse {
    public body?: Array<MergeRequestVoteReviewerDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MergeRequestVoteReviewerDto>): ListProjectMergeRequestCanBeAssignedReviewersResponse {
        this['body'] = body;
        return this;
    }
}