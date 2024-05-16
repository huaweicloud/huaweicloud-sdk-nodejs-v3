
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLargeFileResponse extends SdkResponse {
    private 'file_id'?: string;
    private 'upload_urls'?: Array<string>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withFileId(fileId: string): CreateLargeFileResponse {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withUploadUrls(uploadUrls: Array<string>): CreateLargeFileResponse {
        this['upload_urls'] = uploadUrls;
        return this;
    }
    public set uploadUrls(uploadUrls: Array<string>  | undefined) {
        this['upload_urls'] = uploadUrls;
    }
    public get uploadUrls(): Array<string> | undefined {
        return this['upload_urls'];
    }
    public withXRequestId(xRequestId: string): CreateLargeFileResponse {
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