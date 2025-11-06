import { CommitMergeRequestDto } from './CommitMergeRequestDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCommitAssociatedMergeRequestsResponse extends SdkResponse {
    public body?: Array<CommitMergeRequestDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<CommitMergeRequestDto>): ListCommitAssociatedMergeRequestsResponse {
        this['body'] = body;
        return this;
    }
}