import { CacheConfig } from './CacheConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCacheRulesResponse extends SdkResponse {
    private 'cache_config'?: CacheConfig;
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
}