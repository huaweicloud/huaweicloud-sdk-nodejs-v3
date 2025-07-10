

export class BrowserCacheRulesEngine {
    private 'cache_type'?: string;
    public ttl?: number;
    private 'ttl_unit'?: string;
    public constructor(cacheType?: string) { 
        this['cache_type'] = cacheType;
    }
    public withCacheType(cacheType: string): BrowserCacheRulesEngine {
        this['cache_type'] = cacheType;
        return this;
    }
    public set cacheType(cacheType: string  | undefined) {
        this['cache_type'] = cacheType;
    }
    public get cacheType(): string | undefined {
        return this['cache_type'];
    }
    public withTtl(ttl: number): BrowserCacheRulesEngine {
        this['ttl'] = ttl;
        return this;
    }
    public withTtlUnit(ttlUnit: string): BrowserCacheRulesEngine {
        this['ttl_unit'] = ttlUnit;
        return this;
    }
    public set ttlUnit(ttlUnit: string  | undefined) {
        this['ttl_unit'] = ttlUnit;
    }
    public get ttlUnit(): string | undefined {
        return this['ttl_unit'];
    }
}