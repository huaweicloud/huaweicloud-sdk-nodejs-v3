import { CommentPathDto } from './CommentPathDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMergeRequestCommentsByLineResponse extends SdkResponse {
    public body?: Array<CommentPathDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<CommentPathDto>): ShowMergeRequestCommentsByLineResponse {
        this['body'] = body;
        return this;
    }
}