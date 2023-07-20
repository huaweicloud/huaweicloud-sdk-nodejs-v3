import { ProxyUpdateProxyConnectionPoolTypeRequest } from './ProxyUpdateProxyConnectionPoolTypeRequest';


export class UpdateProxyConnectionPoolTypeRequest {
    private 'instance_id'?: string;
    private 'proxy_id'?: string;
    private 'X-Language'?: string;
    public body?: ProxyUpdateProxyConnectionPoolTypeRequest;
    public constructor(instanceId?: string, proxyId?: string) { 
        this['instance_id'] = instanceId;
        this['proxy_id'] = proxyId;
    }
    public withInstanceId(instanceId: string): UpdateProxyConnectionPoolTypeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProxyId(proxyId: string): UpdateProxyConnectionPoolTypeRequest {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
    public withXLanguage(xLanguage: string): UpdateProxyConnectionPoolTypeRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ProxyUpdateProxyConnectionPoolTypeRequest): UpdateProxyConnectionPoolTypeRequest {
        this['body'] = body;
        return this;
    }
}