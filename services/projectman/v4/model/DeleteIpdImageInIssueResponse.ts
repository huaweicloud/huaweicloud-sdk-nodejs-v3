import { IssueEntity } from './IssueEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteIpdImageInIssueResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: IssueEntity;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteIpdImageInIssueResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): DeleteIpdImageInIssueResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: IssueEntity): DeleteIpdImageInIssueResponse {
        this['result'] = result;
        return this;
    }
}