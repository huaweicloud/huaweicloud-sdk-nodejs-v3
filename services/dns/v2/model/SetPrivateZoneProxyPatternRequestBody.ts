

export class SetPrivateZoneProxyPatternRequestBody {
    private 'proxy_pattern'?: string;
    public constructor(proxyPattern?: string) { 
        this['proxy_pattern'] = proxyPattern;
    }
    public withProxyPattern(proxyPattern: string): SetPrivateZoneProxyPatternRequestBody {
        this['proxy_pattern'] = proxyPattern;
        return this;
    }
    public set proxyPattern(proxyPattern: string  | undefined) {
        this['proxy_pattern'] = proxyPattern;
    }
    public get proxyPattern(): string | undefined {
        return this['proxy_pattern'];
    }
}