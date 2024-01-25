

export class ServerlessInfo {
    private 'min_cap'?: string;
    private 'max_cap'?: string;
    public constructor(minCap?: string, maxCap?: string) { 
        this['min_cap'] = minCap;
        this['max_cap'] = maxCap;
    }
    public withMinCap(minCap: string): ServerlessInfo {
        this['min_cap'] = minCap;
        return this;
    }
    public set minCap(minCap: string  | undefined) {
        this['min_cap'] = minCap;
    }
    public get minCap(): string | undefined {
        return this['min_cap'];
    }
    public withMaxCap(maxCap: string): ServerlessInfo {
        this['max_cap'] = maxCap;
        return this;
    }
    public set maxCap(maxCap: string  | undefined) {
        this['max_cap'] = maxCap;
    }
    public get maxCap(): string | undefined {
        return this['max_cap'];
    }
}