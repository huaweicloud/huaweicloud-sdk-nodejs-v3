import { MergeRequestCommitDto } from './MergeRequestCommitDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestCommitsResponse extends SdkResponse {
    public body?: Array<MergeRequestCommitDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MergeRequestCommitDto>): ListMergeRequestCommitsResponse {
        this['body'] = body;
        return this;
    }
}