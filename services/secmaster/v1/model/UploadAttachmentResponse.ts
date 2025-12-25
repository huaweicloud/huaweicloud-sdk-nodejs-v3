import { UploadAttachmentInfo } from './UploadAttachmentInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadAttachmentResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public data?: UploadAttachmentInfo;
    public constructor() { 
        super();
    }
    public withCode(code: string): UploadAttachmentResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): UploadAttachmentResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): UploadAttachmentResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): UploadAttachmentResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withData(data: UploadAttachmentInfo): UploadAttachmentResponse {
        this['data'] = data;
        return this;
    }
}