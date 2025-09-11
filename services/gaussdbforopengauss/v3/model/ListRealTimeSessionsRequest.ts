import { ListRealTimeSessionsRequestBody } from './ListRealTimeSessionsRequestBody';


export class ListRealTimeSessionsRequest {
    private 'X-Language'?: ListRealTimeSessionsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ListRealTimeSessionsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListRealTimeSessionsRequestXLanguageEnum | string): ListRealTimeSessionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListRealTimeSessionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListRealTimeSessionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListRealTimeSessionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListRealTimeSessionsRequestBody): ListRealTimeSessionsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRealTimeSessionsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
