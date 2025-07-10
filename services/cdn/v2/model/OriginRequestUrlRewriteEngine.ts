

export class OriginRequestUrlRewriteEngine {
    private 'rewrite_type'?: string;
    private 'source_url'?: string;
    private 'target_url'?: string;
    public constructor(rewriteType?: string, targetUrl?: string) { 
        this['rewrite_type'] = rewriteType;
        this['target_url'] = targetUrl;
    }
    public withRewriteType(rewriteType: string): OriginRequestUrlRewriteEngine {
        this['rewrite_type'] = rewriteType;
        return this;
    }
    public set rewriteType(rewriteType: string  | undefined) {
        this['rewrite_type'] = rewriteType;
    }
    public get rewriteType(): string | undefined {
        return this['rewrite_type'];
    }
    public withSourceUrl(sourceUrl: string): OriginRequestUrlRewriteEngine {
        this['source_url'] = sourceUrl;
        return this;
    }
    public set sourceUrl(sourceUrl: string  | undefined) {
        this['source_url'] = sourceUrl;
    }
    public get sourceUrl(): string | undefined {
        return this['source_url'];
    }
    public withTargetUrl(targetUrl: string): OriginRequestUrlRewriteEngine {
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