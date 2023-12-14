import { GeoBlockingConfigInfo } from './GeoBlockingConfigInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGeoBlockingConfigResponse extends SdkResponse {
    private 'play_domain'?: string;
    public apps?: Array<GeoBlockingConfigInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withPlayDomain(playDomain: string): ListGeoBlockingConfigResponse {
        this['play_domain'] = playDomain;
        return this;
    }
    public set playDomain(playDomain: string  | undefined) {
        this['play_domain'] = playDomain;
    }
    public get playDomain(): string | undefined {
        return this['play_domain'];
    }
    public withApps(apps: Array<GeoBlockingConfigInfo>): ListGeoBlockingConfigResponse {
        this['apps'] = apps;
        return this;
    }
    public withXRequestId(xRequestId: string): ListGeoBlockingConfigResponse {
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