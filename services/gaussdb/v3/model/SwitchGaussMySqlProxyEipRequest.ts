import { SwitchGaussMySqlProxyEipRequestBody } from './SwitchGaussMySqlProxyEipRequestBody';


export class SwitchGaussMySqlProxyEipRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'proxy_id'?: string;
    public body?: SwitchGaussMySqlProxyEipRequestBody;
    public constructor(instanceId?: string, proxyId?: string) { 
        this['instance_id'] = instanceId;
        this['proxy_id'] = proxyId;
    }
    public withXLanguage(xLanguage: string): SwitchGaussMySqlProxyEipRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): SwitchGaussMySqlProxyEipRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProxyId(proxyId: string): SwitchGaussMySqlProxyEipRequest {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
    public withBody(body: SwitchGaussMySqlProxyEipRequestBody): SwitchGaussMySqlProxyEipRequest {
        this['body'] = body;
        return this;
    }
}