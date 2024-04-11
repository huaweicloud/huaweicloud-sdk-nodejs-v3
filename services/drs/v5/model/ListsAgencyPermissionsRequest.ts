

export class ListsAgencyPermissionsRequest {
    private 'X-Language'?: ListsAgencyPermissionsRequestXLanguageEnum | string;
    private 'source_type'?: string;
    private 'target_type'?: string;
    private 'is_non_dbs'?: boolean;
    public constructor(isNonDbs?: boolean) { 
        this['is_non_dbs'] = isNonDbs;
    }
    public withXLanguage(xLanguage: ListsAgencyPermissionsRequestXLanguageEnum | string): ListsAgencyPermissionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListsAgencyPermissionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListsAgencyPermissionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withSourceType(sourceType: string): ListsAgencyPermissionsRequest {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withTargetType(targetType: string): ListsAgencyPermissionsRequest {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withIsNonDbs(isNonDbs: boolean): ListsAgencyPermissionsRequest {
        this['is_non_dbs'] = isNonDbs;
        return this;
    }
    public set isNonDbs(isNonDbs: boolean  | undefined) {
        this['is_non_dbs'] = isNonDbs;
    }
    public get isNonDbs(): boolean | undefined {
        return this['is_non_dbs'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListsAgencyPermissionsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
