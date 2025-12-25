import { AttachmentInfo } from './AttachmentInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAttachmentResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public data?: AttachmentInfo;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowAttachmentResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowAttachmentResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ShowAttachmentResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): ShowAttachmentResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withData(data: AttachmentInfo): ShowAttachmentResponse {
        this['data'] = data;
        return this;
    }
}