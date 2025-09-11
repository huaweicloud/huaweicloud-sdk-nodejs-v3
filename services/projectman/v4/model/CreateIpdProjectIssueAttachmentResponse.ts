import { AttachmentVO } from './AttachmentVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateIpdProjectIssueAttachmentResponse extends SdkResponse {
    public message?: string;
    public result?: Array<AttachmentVO>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMessage(message: string): CreateIpdProjectIssueAttachmentResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: Array<AttachmentVO>): CreateIpdProjectIssueAttachmentResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CreateIpdProjectIssueAttachmentResponse {
        this['status'] = status;
        return this;
    }
}