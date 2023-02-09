import { CacheConfigRequest } from './CacheConfigRequest';


export class CacheConfigRequestBody {
    private 'cache_config': CacheConfigRequest | undefined;
    public constructor(cacheConfig?: any) { 
        this['cache_config'] = cacheConfig;
    }
    public withCacheConfig(cacheConfig: CacheConfigRequest): CacheConfigRequestBody {
        this['cache_config'] = cacheConfig;
        return this;
    }
    public set cacheConfig(cacheConfig: CacheConfigRequest | undefined) {
        this['cache_config'] = cacheConfig;
    }
    public get cacheConfig() {
        return this['cache_config'];
    }
}