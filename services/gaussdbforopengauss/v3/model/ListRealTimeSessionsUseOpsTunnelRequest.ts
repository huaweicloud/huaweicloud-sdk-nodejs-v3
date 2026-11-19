import { ListRealTimeSessionsRequestBody } from './ListRealTimeSessionsRequestBody';


export class ListRealTimeSessionsUseOpsTunnelRequest {
    private 'X-Language'?: ListRealTimeSessionsUseOpsTunnelRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ListRealTimeSessionsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListRealTimeSessionsUseOpsTunnelRequestXLanguageEnum | string): ListRealTimeSessionsUseOpsTunnelRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListRealTimeSessionsUseOpsTunnelRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListRealTimeSessionsUseOpsTunnelRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListRealTimeSessionsUseOpsTunnelRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListRealTimeSessionsRequestBody): ListRealTimeSessionsUseOpsTunnelRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRealTimeSessionsUseOpsTunnelRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
