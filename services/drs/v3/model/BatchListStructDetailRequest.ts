import { BatchQueryJobReqPage } from './BatchQueryJobReqPage';


export class BatchListStructDetailRequest {
    public type: BatchListStructDetailRequestTypeEnum;
    private 'X-Language'?: BatchListStructDetailRequestXLanguageEnum | undefined;
    public body?: BatchQueryJobReqPage;
    public constructor(type?: any) { 
        this['type'] = type;
    }
    public withType(type: BatchListStructDetailRequestTypeEnum): BatchListStructDetailRequest {
        this['type'] = type;
        return this;
    }
    public withXLanguage(xLanguage: BatchListStructDetailRequestXLanguageEnum): BatchListStructDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchListStructDetailRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
