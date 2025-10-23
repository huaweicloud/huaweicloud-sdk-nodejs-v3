import { CommentPathDto } from './CommentPathDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCommitCommentsByLineResponse extends SdkResponse {
    public body?: Array<CommentPathDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<CommentPathDto>): ShowCommitCommentsByLineResponse {
        this['body'] = body;
        return this;
    }
}