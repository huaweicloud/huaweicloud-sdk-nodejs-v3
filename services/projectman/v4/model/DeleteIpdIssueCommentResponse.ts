import { CommentEntity } from './CommentEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteIpdIssueCommentResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: CommentEntity;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteIpdIssueCommentResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): DeleteIpdIssueCommentResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: CommentEntity): DeleteIpdIssueCommentResponse {
        this['result'] = result;
        return this;
    }
}