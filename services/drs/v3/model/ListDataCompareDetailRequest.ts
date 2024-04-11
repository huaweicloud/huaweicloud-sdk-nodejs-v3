

export class ListDataCompareDetailRequest {
    private 'X-Language'?: ListDataCompareDetailRequestXLanguageEnum | string;
    private 'job_id'?: string;
    private 'compare_job_id'?: string;
    public status?: number;
    public type?: string;
    private 'db_name'?: string;
    private 'target_db_name'?: string;
    private 'query_tb_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(jobId?: string, compareJobId?: string) { 
        this['job_id'] = jobId;
        this['compare_job_id'] = compareJobId;
    }
    public withXLanguage(xLanguage: ListDataCompareDetailRequestXLanguageEnum | string): ListDataCompareDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListDataCompareDetailRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListDataCompareDetailRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ListDataCompareDetailRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withCompareJobId(compareJobId: string): ListDataCompareDetailRequest {
        this['compare_job_id'] = compareJobId;
        return this;
    }
    public set compareJobId(compareJobId: string  | undefined) {
        this['compare_job_id'] = compareJobId;
    }
    public get compareJobId(): string | undefined {
        return this['compare_job_id'];
    }
    public withStatus(status: number): ListDataCompareDetailRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ListDataCompareDetailRequest {
        this['type'] = type;
        return this;
    }
    public withDbName(dbName: string): ListDataCompareDetailRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTargetDbName(targetDbName: string): ListDataCompareDetailRequest {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string  | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName(): string | undefined {
        return this['target_db_name'];
    }
    public withQueryTbName(queryTbName: string): ListDataCompareDetailRequest {
        this['query_tb_name'] = queryTbName;
        return this;
    }
    public set queryTbName(queryTbName: string  | undefined) {
        this['query_tb_name'] = queryTbName;
    }
    public get queryTbName(): string | undefined {
        return this['query_tb_name'];
    }
    public withLimit(limit: number): ListDataCompareDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDataCompareDetailRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDataCompareDetailRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
