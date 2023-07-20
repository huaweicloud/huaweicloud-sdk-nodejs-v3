

export class CloseMysqlProxyRequestBody {
    private 'proxy_ids'?: Array<string>;
    public constructor() { 
    }
    public withProxyIds(proxyIds: Array<string>): CloseMysqlProxyRequestBody {
        this['proxy_ids'] = proxyIds;
        return this;
    }
    public set proxyIds(proxyIds: Array<string>  | undefined) {
        this['proxy_ids'] = proxyIds;
    }
    public get proxyIds(): Array<string> | undefined {
        return this['proxy_ids'];
    }
}