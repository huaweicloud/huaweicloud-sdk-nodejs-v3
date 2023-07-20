import { CacheConfigRequest } from './CacheConfigRequest';


export class CacheConfigRequestBody {
    private 'cache_config'?: CacheConfigRequest;
    public constructor(cacheConfig?: CacheConfigRequest) { 
        this['cache_config'] = cacheConfig;
    }
    public withCacheConfig(cacheConfig: CacheConfigRequest): CacheConfigRequestBody {
        this['cache_config'] = cacheConfig;
        return this;
    }
    public set cacheConfig(cacheConfig: CacheConfigRequest  | undefined) {
        this['cache_config'] = cacheConfig;
    }
    public get cacheConfig(): CacheConfigRequest | undefined {
        return this['cache_config'];
    }
}