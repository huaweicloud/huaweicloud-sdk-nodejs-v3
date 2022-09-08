import { AttachmentResponse } from './AttachmentResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAttachmentResponse extends SdkResponse {
    public attachment?: AttachmentResponse;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withAttachment(attachment: AttachmentResponse): UpdateAttachmentResponse {
        this['attachment'] = attachment;
        return this;
    }
    public withRequestId(requestId: string): UpdateAttachmentResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}