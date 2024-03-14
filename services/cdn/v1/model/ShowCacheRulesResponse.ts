import { CacheConfig } from './CacheConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCacheRulesResponse extends SdkResponse {
    private 'cache_config'?: CacheConfig;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCacheConfig(cacheConfig: CacheConfig): ShowCacheRulesResponse {
        this['cache_config'] = cacheConfig;
        return this;
    }
    public set cacheConfig(cacheConfig: CacheConfig  | undefined) {
        this['cache_config'] = cacheConfig;
    }
    public get cacheConfig(): CacheConfig | undefined {
        return this['cache_config'];
    }
    public withXRequestId(xRequestId: string): ShowCacheRulesResponse {
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