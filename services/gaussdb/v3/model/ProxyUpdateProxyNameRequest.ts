

export class ProxyUpdateProxyNameRequest {
    public alias?: string;
    public constructor(alias?: string) { 
        this['alias'] = alias;
    }
    public withAlias(alias: string): ProxyUpdateProxyNameRequest {
        this['alias'] = alias;
        return this;
    }
}