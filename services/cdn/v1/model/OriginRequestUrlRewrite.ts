

export class OriginRequestUrlRewrite {
    public priority: number;
    private 'match_type': string | undefined;
    private 'source_url'?: string | undefined;
    private 'target_url': string | undefined;
    public constructor(priority?: any, matchType?: any, targetUrl?: any) { 
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
    public set matchType(matchType: string | undefined) {
        this['match_type'] = matchType;
    }
    public get matchType() {
        return this['match_type'];
    }
    public withSourceUrl(sourceUrl: string): OriginRequestUrlRewrite {
        this['source_url'] = sourceUrl;
        return this;
    }
    public set sourceUrl(sourceUrl: string | undefined) {
        this['source_url'] = sourceUrl;
    }
    public get sourceUrl() {
        return this['source_url'];
    }
    public withTargetUrl(targetUrl: string): OriginRequestUrlRewrite {
        this['target_url'] = targetUrl;
        return this;
    }
    public set targetUrl(targetUrl: string | undefined) {
        this['target_url'] = targetUrl;
    }
    public get targetUrl() {
        return this['target_url'];
    }
}