

export class ListAvailableNodeTypesRequest {
    private 'X-Language'?: ListAvailableNodeTypesRequestXLanguageEnum | string;
    private 'engine_type'?: string;
    private 'db_use_type'?: ListAvailableNodeTypesRequestDbUseTypeEnum | string;
    private 'job_direction'?: ListAvailableNodeTypesRequestJobDirectionEnum | string;
    private 'is_use_sellout_info'?: boolean;
    private 'is_multi_write'?: boolean;
    public constructor(engineType?: string, dbUseType?: string, jobDirection?: string) { 
        this['engine_type'] = engineType;
        this['db_use_type'] = dbUseType;
        this['job_direction'] = jobDirection;
    }
    public withXLanguage(xLanguage: ListAvailableNodeTypesRequestXLanguageEnum | string): ListAvailableNodeTypesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListAvailableNodeTypesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListAvailableNodeTypesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withEngineType(engineType: string): ListAvailableNodeTypesRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withDbUseType(dbUseType: ListAvailableNodeTypesRequestDbUseTypeEnum | string): ListAvailableNodeTypesRequest {
        this['db_use_type'] = dbUseType;
        return this;
    }
    public set dbUseType(dbUseType: ListAvailableNodeTypesRequestDbUseTypeEnum | string  | undefined) {
        this['db_use_type'] = dbUseType;
    }
    public get dbUseType(): ListAvailableNodeTypesRequestDbUseTypeEnum | string | undefined {
        return this['db_use_type'];
    }
    public withJobDirection(jobDirection: ListAvailableNodeTypesRequestJobDirectionEnum | string): ListAvailableNodeTypesRequest {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: ListAvailableNodeTypesRequestJobDirectionEnum | string  | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection(): ListAvailableNodeTypesRequestJobDirectionEnum | string | undefined {
        return this['job_direction'];
    }
    public withIsUseSelloutInfo(isUseSelloutInfo: boolean): ListAvailableNodeTypesRequest {
        this['is_use_sellout_info'] = isUseSelloutInfo;
        return this;
    }
    public set isUseSelloutInfo(isUseSelloutInfo: boolean  | undefined) {
        this['is_use_sellout_info'] = isUseSelloutInfo;
    }
    public get isUseSelloutInfo(): boolean | undefined {
        return this['is_use_sellout_info'];
    }
    public withIsMultiWrite(isMultiWrite: boolean): ListAvailableNodeTypesRequest {
        this['is_multi_write'] = isMultiWrite;
        return this;
    }
    public set isMultiWrite(isMultiWrite: boolean  | undefined) {
        this['is_multi_write'] = isMultiWrite;
    }
    public get isMultiWrite(): boolean | undefined {
        return this['is_multi_write'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAvailableNodeTypesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAvailableNodeTypesRequestDbUseTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAvailableNodeTypesRequestJobDirectionEnum {
    UP = 'up',
    DOWN = 'down',
    NON_DBS = 'non-dbs'
}
