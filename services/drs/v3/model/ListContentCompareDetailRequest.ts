

export class ListContentCompareDetailRequest {
    private 'X-Language'?: ListContentCompareDetailRequestXLanguageEnum | string;
    private 'job_id'?: string;
    private 'compare_job_id'?: string;
    private 'target_db_name'?: string;
    private 'db_name'?: string;
    public type?: string;
    public limit?: number;
    public offset?: number;
    public constructor(jobId?: string, compareJobId?: string) { 
        this['job_id'] = jobId;
        this['compare_job_id'] = compareJobId;
    }
    public withXLanguage(xLanguage: ListContentCompareDetailRequestXLanguageEnum | string): ListContentCompareDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListContentCompareDetailRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListContentCompareDetailRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ListContentCompareDetailRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withCompareJobId(compareJobId: string): ListContentCompareDetailRequest {
        this['compare_job_id'] = compareJobId;
        return this;
    }
    public set compareJobId(compareJobId: string  | undefined) {
        this['compare_job_id'] = compareJobId;
    }
    public get compareJobId(): string | undefined {
        return this['compare_job_id'];
    }
    public withTargetDbName(targetDbName: string): ListContentCompareDetailRequest {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string  | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName(): string | undefined {
        return this['target_db_name'];
    }
    public withDbName(dbName: string): ListContentCompareDetailRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withType(type: string): ListContentCompareDetailRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ListContentCompareDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListContentCompareDetailRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListContentCompareDetailRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
