import { AttachmentResponse } from './AttachmentResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RejectAttachmentResponse extends SdkResponse {
    public attachment?: AttachmentResponse;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withAttachment(attachment: AttachmentResponse): RejectAttachmentResponse {
        this['attachment'] = attachment;
        return this;
    }
    public withRequestId(requestId: string): RejectAttachmentResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}