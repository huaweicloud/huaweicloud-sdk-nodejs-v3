

export class ErrorCodeCacheEngine {
    public code?: number;
    public ttl?: number;
    public constructor(code?: number, ttl?: number) { 
        this['code'] = code;
        this['ttl'] = ttl;
    }
    public withCode(code: number): ErrorCodeCacheEngine {
        this['code'] = code;
        return this;
    }
    public withTtl(ttl: number): ErrorCodeCacheEngine {
        this['ttl'] = ttl;
        return this;
    }
}