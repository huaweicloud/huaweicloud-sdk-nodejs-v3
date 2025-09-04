

export class TopOriginUrlSummary {
    private 'origin_url'?: string;
    public value?: number;
    public ratio?: number;
    public constructor() { 
    }
    public withOriginUrl(originUrl: string): TopOriginUrlSummary {
        this['origin_url'] = originUrl;
        return this;
    }
    public set originUrl(originUrl: string  | undefined) {
        this['origin_url'] = originUrl;
    }
    public get originUrl(): string | undefined {
        return this['origin_url'];
    }
    public withValue(value: number): TopOriginUrlSummary {
        this['value'] = value;
        return this;
    }
    public withRatio(ratio: number): TopOriginUrlSummary {
        this['ratio'] = ratio;
        return this;
    }
}