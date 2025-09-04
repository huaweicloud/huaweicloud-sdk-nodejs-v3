

export class ShowProxyFlavorsByAzCodeRequest {
    private 'X-Language'?: string;
    private 'az_codes'?: string;
    private 'proxy_engine_name'?: string;
    public constructor(azCodes?: string, proxyEngineName?: string) { 
        this['az_codes'] = azCodes;
        this['proxy_engine_name'] = proxyEngineName;
    }
    public withXLanguage(xLanguage: string): ShowProxyFlavorsByAzCodeRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withAzCodes(azCodes: string): ShowProxyFlavorsByAzCodeRequest {
        this['az_codes'] = azCodes;
        return this;
    }
    public set azCodes(azCodes: string  | undefined) {
        this['az_codes'] = azCodes;
    }
    public get azCodes(): string | undefined {
        return this['az_codes'];
    }
    public withProxyEngineName(proxyEngineName: string): ShowProxyFlavorsByAzCodeRequest {
        this['proxy_engine_name'] = proxyEngineName;
        return this;
    }
    public set proxyEngineName(proxyEngineName: string  | undefined) {
        this['proxy_engine_name'] = proxyEngineName;
    }
    public get proxyEngineName(): string | undefined {
        return this['proxy_engine_name'];
    }
}