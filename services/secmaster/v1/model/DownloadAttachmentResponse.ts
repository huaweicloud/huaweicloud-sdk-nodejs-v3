
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadAttachmentResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public data?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DownloadAttachmentResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DownloadAttachmentResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): DownloadAttachmentResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): DownloadAttachmentResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withData(data: string): DownloadAttachmentResponse {
        this['data'] = data;
        return this;
    }
}