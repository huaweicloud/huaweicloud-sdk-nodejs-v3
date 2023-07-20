import { BatchQueryJobReqPage } from './BatchQueryJobReqPage';


export class BatchListStructDetailRequest {
    public type?: BatchListStructDetailRequestTypeEnum | string;
    private 'X-Language'?: BatchListStructDetailRequestXLanguageEnum | string;
    public body?: BatchQueryJobReqPage;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: BatchListStructDetailRequestTypeEnum | string): BatchListStructDetailRequest {
        this['type'] = type;
        return this;
    }
    public withXLanguage(xLanguage: BatchListStructDetailRequestXLanguageEnum | string): BatchListStructDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchListStructDetailRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchListStructDetailRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchQueryJobReqPage): BatchListStructDetailRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchListStructDetailRequestTypeEnum {
    DATABASE = 'database',
    SCHEMA = 'schema',
    TABLE = 'table',
    VIEW = 'view',
    PROCEDURE = 'procedure',
    TRIGGER = 'trigger',
    INDEX = 'index',
    TABLE_INDEXS = 'table_indexs',
    TABLE_STRUCTURE = 'table_structure'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchListStructDetailRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
