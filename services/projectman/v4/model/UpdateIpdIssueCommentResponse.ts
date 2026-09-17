import { CommentEntity } from './CommentEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateIpdIssueCommentResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: CommentEntity;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateIpdIssueCommentResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): UpdateIpdIssueCommentResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: CommentEntity): UpdateIpdIssueCommentResponse {
        this['result'] = result;
        return this;
    }
}