import { SwitchGaussMySqlProxyAltRequestBody } from './SwitchGaussMySqlProxyAltRequestBody';


export class SwitchGaussMySqlProxyAltRequest {
    private 'instance_id'?: string;
    private 'proxy_id'?: string;
    private 'X-Language'?: SwitchGaussMySqlProxyAltRequestXLanguageEnum | string;
    public body?: SwitchGaussMySqlProxyAltRequestBody;
    public constructor(instanceId?: string, proxyId?: string) { 
        this['instance_id'] = instanceId;
        this['proxy_id'] = proxyId;
    }
    public withInstanceId(instanceId: string): SwitchGaussMySqlProxyAltRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProxyId(proxyId: string): SwitchGaussMySqlProxyAltRequest {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
    public withXLanguage(xLanguage: SwitchGaussMySqlProxyAltRequestXLanguageEnum | string): SwitchGaussMySqlProxyAltRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SwitchGaussMySqlProxyAltRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SwitchGaussMySqlProxyAltRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SwitchGaussMySqlProxyAltRequestBody): SwitchGaussMySqlProxyAltRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchGaussMySqlProxyAltRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
