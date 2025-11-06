import { MRVoteReviewerDto } from './MRVoteReviewerDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestValidAssignedCandidatesResponse extends SdkResponse {
    public body?: Array<MRVoteReviewerDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MRVoteReviewerDto>): ListMergeRequestValidAssignedCandidatesResponse {
        this['body'] = body;
        return this;
    }
}