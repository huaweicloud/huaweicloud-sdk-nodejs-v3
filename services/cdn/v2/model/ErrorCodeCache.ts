

export class ErrorCodeCache {
    public code?: ErrorCodeCacheCodeEnum;
    public ttl?: number;
    public constructor() { 
    }
    public withCode(code: ErrorCodeCacheCodeEnum): ErrorCodeCache {
        this['code'] = code;
        return this;
    }
    public withTtl(ttl: number): ErrorCodeCache {
        this['ttl'] = ttl;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ErrorCodeCacheCodeEnum {
    NUMBER_400 = 400,
    NUMBER_403 = 403,
    NUMBER_404 = 404,
    NUMBER_405 = 405,
    NUMBER_414 = 414,
    NUMBER_500 = 500,
    NUMBER_501 = 501,
    NUMBER_502 = 502,
    NUMBER_503 = 503,
    NUMBER_504 = 504
}
