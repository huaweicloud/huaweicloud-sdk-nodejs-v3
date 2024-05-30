

export class ShowProxyVersionRequest {
    private 'instance_id'?: string;
    private 'engine_name'?: string;
    private 'proxy_id'?: string;
    private 'X-Language'?: string;
    public constructor(instanceId?: string, engineName?: string, proxyId?: string) { 
        this['instance_id'] = instanceId;
        this['engine_name'] = engineName;
        this['proxy_id'] = proxyId;
    }
    public withInstanceId(instanceId: string): ShowProxyVersionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEngineName(engineName: string): ShowProxyVersionRequest {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withProxyId(proxyId: string): ShowProxyVersionRequest {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
    public withXLanguage(xLanguage: string): ShowProxyVersionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}