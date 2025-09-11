
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadHttpCertResponse extends SdkResponse {
    public body?: string;
    private 'content-type'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): DownloadHttpCertResponse {
        this['body'] = body;
        return this;
    }
    public withContentType(contentType: string): DownloadHttpCertResponse {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
}