

export class DownloadDbObjectTemplateRequest {
    private 'job_id'?: string;
    private 'X-Language'?: DownloadDbObjectTemplateRequestXLanguageEnum | string;
    private 'file_import_db_level'?: DownloadDbObjectTemplateRequestFileImportDbLevelEnum | string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): DownloadDbObjectTemplateRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: DownloadDbObjectTemplateRequestXLanguageEnum | string): DownloadDbObjectTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DownloadDbObjectTemplateRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DownloadDbObjectTemplateRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withFileImportDbLevel(fileImportDbLevel: DownloadDbObjectTemplateRequestFileImportDbLevelEnum | string): DownloadDbObjectTemplateRequest {
        this['file_import_db_level'] = fileImportDbLevel;
        return this;
    }
    public set fileImportDbLevel(fileImportDbLevel: DownloadDbObjectTemplateRequestFileImportDbLevelEnum | string  | undefined) {
        this['file_import_db_level'] = fileImportDbLevel;
    }
    public get fileImportDbLevel(): DownloadDbObjectTemplateRequestFileImportDbLevelEnum | string | undefined {
        return this['file_import_db_level'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DownloadDbObjectTemplateRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
/**
    * @export
    * @enum {string}
    */
export enum DownloadDbObjectTemplateRequestFileImportDbLevelEnum {
    DATABASE = 'database',
    TABLE = 'table'
}
