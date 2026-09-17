import { CommentResult } from './CommentResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpdIssueCommentsResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: CommentResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListIpdIssueCommentsResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ListIpdIssueCommentsResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: CommentResult): ListIpdIssueCommentsResponse {
        this['result'] = result;
        return this;
    }
}