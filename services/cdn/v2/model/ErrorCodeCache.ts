

export class ErrorCodeCache {
    public code?: number;
    public ttl?: number;
    public constructor() { 
    }
    public withCode(code: number): ErrorCodeCache {
        this['code'] = code;
        return this;
    }
    public withTtl(ttl: number): ErrorCodeCache {
        this['ttl'] = ttl;
        return this;
    }
}