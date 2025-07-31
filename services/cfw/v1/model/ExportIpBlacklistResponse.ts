
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportIpBlacklistResponse extends SdkResponse {
    public body?: string;
    private 'Content-Disposition'?: string;
    private 'Content-Type'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): ExportIpBlacklistResponse {
        this['body'] = body;
        return this;
    }
    public withContentDisposition(contentDisposition: string): ExportIpBlacklistResponse {
        this['Content-Disposition'] = contentDisposition;
        return this;
    }
    public set contentDisposition(contentDisposition: string  | undefined) {
        this['Content-Disposition'] = contentDisposition;
    }
    public get contentDisposition(): string | undefined {
        return this['Content-Disposition'];
    }
    public withContentType(contentType: string): ExportIpBlacklistResponse {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}