
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPresignedUrlResponse extends SdkResponse {
    private 'presigned_url'?: string;
    public expire?: number;
    public constructor() { 
        super();
    }
    public withPresignedUrl(presignedUrl: string): ShowPresignedUrlResponse {
        this['presigned_url'] = presignedUrl;
        return this;
    }
    public set presignedUrl(presignedUrl: string  | undefined) {
        this['presigned_url'] = presignedUrl;
    }
    public get presignedUrl(): string | undefined {
        return this['presigned_url'];
    }
    public withExpire(expire: number): ShowPresignedUrlResponse {
        this['expire'] = expire;
        return this;
    }
}