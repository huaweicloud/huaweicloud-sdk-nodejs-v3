import { ListSQLExcuteNodeRequestBody } from './ListSQLExcuteNodeRequestBody';


export class ListSqlExcuteNodesRequest {
    private 'X-Language'?: ListSqlExcuteNodesRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ListSQLExcuteNodeRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListSqlExcuteNodesRequestXLanguageEnum | string): ListSqlExcuteNodesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSqlExcuteNodesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSqlExcuteNodesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSqlExcuteNodesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListSQLExcuteNodeRequestBody): ListSqlExcuteNodesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSqlExcuteNodesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
