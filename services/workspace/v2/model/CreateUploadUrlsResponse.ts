import { UploadUrlItem } from './UploadUrlItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUploadUrlsResponse extends SdkResponse {
    private 'upload_urls'?: Array<UploadUrlItem>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withUploadUrls(uploadUrls: Array<UploadUrlItem>): CreateUploadUrlsResponse {
        this['upload_urls'] = uploadUrls;
        return this;
    }
    public set uploadUrls(uploadUrls: Array<UploadUrlItem>  | undefined) {
        this['upload_urls'] = uploadUrls;
    }
    public get uploadUrls(): Array<UploadUrlItem> | undefined {
        return this['upload_urls'];
    }
    public withXRequestId(xRequestId: string): CreateUploadUrlsResponse {
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