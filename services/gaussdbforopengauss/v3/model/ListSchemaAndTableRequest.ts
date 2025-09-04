import { ListSchemaAndTableRequestBody } from './ListSchemaAndTableRequestBody';


export class ListSchemaAndTableRequest {
    private 'X-Language'?: ListSchemaAndTableRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ListSchemaAndTableRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListSchemaAndTableRequestXLanguageEnum | string): ListSchemaAndTableRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSchemaAndTableRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSchemaAndTableRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSchemaAndTableRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListSchemaAndTableRequestBody): ListSchemaAndTableRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSchemaAndTableRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
