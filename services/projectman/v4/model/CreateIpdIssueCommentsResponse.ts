import { CommentEntity } from './CommentEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateIpdIssueCommentsResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: CommentEntity;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateIpdIssueCommentsResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): CreateIpdIssueCommentsResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: CommentEntity): CreateIpdIssueCommentsResponse {
        this['result'] = result;
        return this;
    }
}