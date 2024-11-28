
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLivePlatformResponse extends SdkResponse {
    private 'platform_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withPlatformId(platformId: string): UpdateLivePlatformResponse {
        this['platform_id'] = platformId;
        return this;
    }
    public set platformId(platformId: string  | undefined) {
        this['platform_id'] = platformId;
    }
    public get platformId(): string | undefined {
        return this['platform_id'];
    }
    public withXRequestId(xRequestId: string): UpdateLivePlatformResponse {
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