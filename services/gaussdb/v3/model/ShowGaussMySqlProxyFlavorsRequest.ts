

export class ShowGaussMySqlProxyFlavorsRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'query_type'?: ShowGaussMySqlProxyFlavorsRequestQueryTypeEnum | string;
    private 'proxy_id'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): ShowGaussMySqlProxyFlavorsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowGaussMySqlProxyFlavorsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withQueryType(queryType: ShowGaussMySqlProxyFlavorsRequestQueryTypeEnum | string): ShowGaussMySqlProxyFlavorsRequest {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: ShowGaussMySqlProxyFlavorsRequestQueryTypeEnum | string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): ShowGaussMySqlProxyFlavorsRequestQueryTypeEnum | string | undefined {
        return this['query_type'];
    }
    public withProxyId(proxyId: string): ShowGaussMySqlProxyFlavorsRequest {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowGaussMySqlProxyFlavorsRequestQueryTypeEnum {
    CREATE = 'create',
    SCALE = 'scale'
}
