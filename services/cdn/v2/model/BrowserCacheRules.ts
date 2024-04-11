import { BrowserCacheRulesCondition } from './BrowserCacheRulesCondition';


export class BrowserCacheRules {
    public condition?: BrowserCacheRulesCondition;
    private 'cache_type'?: string;
    public ttl?: number;
    private 'ttl_unit'?: string;
    public constructor(condition?: BrowserCacheRulesCondition, cacheType?: string) { 
        this['condition'] = condition;
        this['cache_type'] = cacheType;
    }
    public withCondition(condition: BrowserCacheRulesCondition): BrowserCacheRules {
        this['condition'] = condition;
        return this;
    }
    public withCacheType(cacheType: string): BrowserCacheRules {
        this['cache_type'] = cacheType;
        return this;
    }
    public set cacheType(cacheType: string  | undefined) {
        this['cache_type'] = cacheType;
    }
    public get cacheType(): string | undefined {
        return this['cache_type'];
    }
    public withTtl(ttl: number): BrowserCacheRules {
        this['ttl'] = ttl;
        return this;
    }
    public withTtlUnit(ttlUnit: string): BrowserCacheRules {
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