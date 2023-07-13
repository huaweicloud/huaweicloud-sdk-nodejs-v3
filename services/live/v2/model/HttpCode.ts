

export class HttpCode {
    public code?: number;
    public count?: number;
    public proportion?: number;
    public constructor() { 
    }
    public withCode(code: number): HttpCode {
        this['code'] = code;
        return this;
    }
    public withCount(count: number): HttpCode {
        this['count'] = count;
        return this;
    }
    public withProportion(proportion: number): HttpCode {
        this['proportion'] = proportion;
        return this;
    }
}