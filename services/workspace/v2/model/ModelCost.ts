

export class ModelCost {
    public input?: number;
    public output?: number;
    private 'cache_read'?: number;
    private 'cache_write'?: number;
    public constructor() { 
    }
    public withInput(input: number): ModelCost {
        this['input'] = input;
        return this;
    }
    public withOutput(output: number): ModelCost {
        this['output'] = output;
        return this;
    }
    public withCacheRead(cacheRead: number): ModelCost {
        this['cache_read'] = cacheRead;
        return this;
    }
    public set cacheRead(cacheRead: number  | undefined) {
        this['cache_read'] = cacheRead;
    }
    public get cacheRead(): number | undefined {
        return this['cache_read'];
    }
    public withCacheWrite(cacheWrite: number): ModelCost {
        this['cache_write'] = cacheWrite;
        return this;
    }
    public set cacheWrite(cacheWrite: number  | undefined) {
        this['cache_write'] = cacheWrite;
    }
    public get cacheWrite(): number | undefined {
        return this['cache_write'];
    }
}