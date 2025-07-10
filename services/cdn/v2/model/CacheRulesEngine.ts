

export class CacheRulesEngine {
    public ttl?: number;
    private 'ttl_unit'?: string;
    private 'follow_origin'?: string;
    private 'force_cache'?: string;
    public constructor(ttl?: number, ttlUnit?: string, followOrigin?: string) { 
        this['ttl'] = ttl;
        this['ttl_unit'] = ttlUnit;
        this['follow_origin'] = followOrigin;
    }
    public withTtl(ttl: number): CacheRulesEngine {
        this['ttl'] = ttl;
        return this;
    }
    public withTtlUnit(ttlUnit: string): CacheRulesEngine {
        this['ttl_unit'] = ttlUnit;
        return this;
    }
    public set ttlUnit(ttlUnit: string  | undefined) {
        this['ttl_unit'] = ttlUnit;
    }
    public get ttlUnit(): string | undefined {
        return this['ttl_unit'];
    }
    public withFollowOrigin(followOrigin: string): CacheRulesEngine {
        this['follow_origin'] = followOrigin;
        return this;
    }
    public set followOrigin(followOrigin: string  | undefined) {
        this['follow_origin'] = followOrigin;
    }
    public get followOrigin(): string | undefined {
        return this['follow_origin'];
    }
    public withForceCache(forceCache: string): CacheRulesEngine {
        this['force_cache'] = forceCache;
        return this;
    }
    public set forceCache(forceCache: string  | undefined) {
        this['force_cache'] = forceCache;
    }
    public get forceCache(): string | undefined {
        return this['force_cache'];
    }
}