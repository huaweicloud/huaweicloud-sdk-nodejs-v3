

export class ShowProxyConfigurationsRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'proxy_id'?: string;
    public limit?: number;
    public offset?: number;
    public name?: string;
    public constructor(instanceId?: string, proxyId?: string) { 
        this['instance_id'] = instanceId;
        this['proxy_id'] = proxyId;
    }
    public withXLanguage(xLanguage: string): ShowProxyConfigurationsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowProxyConfigurationsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProxyId(proxyId: string): ShowProxyConfigurationsRequest {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
    public withLimit(limit: number): ShowProxyConfigurationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowProxyConfigurationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): ShowProxyConfigurationsRequest {
        this['name'] = name;
        return this;
    }
}