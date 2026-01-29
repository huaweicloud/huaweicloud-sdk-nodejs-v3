import { IssueEntity } from './IssueEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadIpdImageInIssueResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: IssueEntity;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UploadIpdImageInIssueResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): UploadIpdImageInIssueResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: IssueEntity): UploadIpdImageInIssueResponse {
        this['result'] = result;
        return this;
    }
}