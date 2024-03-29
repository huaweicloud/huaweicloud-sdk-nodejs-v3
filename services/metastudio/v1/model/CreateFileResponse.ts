
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFileResponse extends SdkResponse {
    private 'file_id'?: string;
    private 'upload_url'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withFileId(fileId: string): CreateFileResponse {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withUploadUrl(uploadUrl: string): CreateFileResponse {
        this['upload_url'] = uploadUrl;
        return this;
    }
    public set uploadUrl(uploadUrl: string  | undefined) {
        this['upload_url'] = uploadUrl;
    }
    public get uploadUrl(): string | undefined {
        return this['upload_url'];
    }
    public withXRequestId(xRequestId: string): CreateFileResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}