import { CommitDiscussionDto } from './CommitDiscussionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCommitDiscussionsResponse extends SdkResponse {
    public body?: Array<CommitDiscussionDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<CommitDiscussionDto>): ListCommitDiscussionsResponse {
        this['body'] = body;
        return this;
    }
}