import { UploadDbObjectTemplateRequestBody } from './UploadDbObjectTemplateRequestBody';


export class UploadDbObjectTemplateRequest {
    private 'job_id'?: string;
    private 'X-Language'?: UploadDbObjectTemplateRequestXLanguageEnum | string;
    private 'file_import_db_level'?: UploadDbObjectTemplateRequestFileImportDbLevelEnum | string;
    public body?: UploadDbObjectTemplateRequestBody;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): UploadDbObjectTemplateRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: UploadDbObjectTemplateRequestXLanguageEnum | string): UploadDbObjectTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UploadDbObjectTemplateRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UploadDbObjectTemplateRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withFileImportDbLevel(fileImportDbLevel: UploadDbObjectTemplateRequestFileImportDbLevelEnum | string): UploadDbObjectTemplateRequest {
        this['file_import_db_level'] = fileImportDbLevel;
        return this;
    }
    public set fileImportDbLevel(fileImportDbLevel: UploadDbObjectTemplateRequestFileImportDbLevelEnum | string  | undefined) {
        this['file_import_db_level'] = fileImportDbLevel;
    }
    public get fileImportDbLevel(): UploadDbObjectTemplateRequestFileImportDbLevelEnum | string | undefined {
        return this['file_import_db_level'];
    }
    public withBody(body: UploadDbObjectTemplateRequestBody): UploadDbObjectTemplateRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UploadDbObjectTemplateRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
/**
    * @export
    * @enum {string}
    */
export enum UploadDbObjectTemplateRequestFileImportDbLevelEnum {
    DATABASE = 'database',
    TABLE = 'table'
}
