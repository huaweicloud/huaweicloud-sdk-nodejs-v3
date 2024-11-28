import { LivePlatformInfo } from './LivePlatformInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLivePlatformsResponse extends SdkResponse {
    private 'live_platforms'?: Array<LivePlatformInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withLivePlatforms(livePlatforms: Array<LivePlatformInfo>): ListLivePlatformsResponse {
        this['live_platforms'] = livePlatforms;
        return this;
    }
    public set livePlatforms(livePlatforms: Array<LivePlatformInfo>  | undefined) {
        this['live_platforms'] = livePlatforms;
    }
    public get livePlatforms(): Array<LivePlatformInfo> | undefined {
        return this['live_platforms'];
    }
    public withXRequestId(xRequestId: string): ListLivePlatformsResponse {
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