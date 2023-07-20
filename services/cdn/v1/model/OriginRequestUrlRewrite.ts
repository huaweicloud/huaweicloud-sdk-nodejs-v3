

export class OriginRequestUrlRewrite {
    public priority?: number;
    private 'match_type'?: string;
    private 'source_url'?: string;
    private 'target_url'?: string;
    public constructor(priority?: number, matchType?: string, targetUrl?: string) { 
        this['priority'] = priority;
        this['match_type'] = matchType;
        this['target_url'] = targetUrl;
    }
    public withPriority(priority: number): OriginRequestUrlRewrite {
        this['priority'] = priority;
        return this;
    }
    public withMatchType(matchType: string): OriginRequestUrlRewrite {
        this['match_type'] = matchType;
        return this;
    }
    public set matchType(matchType: string  | undefined) {
        this['match_type'] = matchType;
    }
    public get matchType(): string | undefined {
        return this['match_type'];
    }
    public withSourceUrl(sourceUrl: string): OriginRequestUrlRewrite {
        this['source_url'] = sourceUrl;
        return this;
    }
    public set sourceUrl(sourceUrl: string  | undefined) {
        this['source_url'] = sourceUrl;
    }
    public get sourceUrl(): string | undefined {
        return this['source_url'];
    }
    public withTargetUrl(targetUrl: string): OriginRequestUrlRewrite {
        this['target_url'] = targetUrl;
        return this;
    }
    public set targetUrl(targetUrl: string  | undefined) {
        this['target_url'] = targetUrl;
    }
    public get targetUrl(): string | undefined {
        return this['target_url'];
    }
}