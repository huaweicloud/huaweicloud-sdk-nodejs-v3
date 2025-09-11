import { AttachmentEntity } from './AttachmentEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIpdAttachmentByWorkItemIdResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: Array<AttachmentEntity>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowIpdAttachmentByWorkItemIdResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ShowIpdAttachmentByWorkItemIdResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: Array<AttachmentEntity>): ShowIpdAttachmentByWorkItemIdResponse {
        this['result'] = result;
        return this;
    }
}