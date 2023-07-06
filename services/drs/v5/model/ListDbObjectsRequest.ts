

export class ListDbObjectsRequest {
    private 'job_id': string | undefined;
    private 'X-Language'?: ListDbObjectsRequestXLanguageEnum | undefined;
    public offset?: number;
    public limit?: number;
    public type: string;
    private 'db_names'?: Array<string> | undefined;
    public constructor(jobId?: any, type?: any) { 
        this['job_id'] = jobId;
        this['type'] = type;
    }
    public withJobId(jobId: string): ListDbObjectsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ListDbObjectsRequestXLanguageEnum): ListDbObjectsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListDbObjectsRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListDbObjectsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDbObjectsRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: string): ListDbObjectsRequest {
        this['type'] = type;
        return this;
    }
    public withDbNames(dbNames: Array<string>): ListDbObjectsRequest {
        this['db_names'] = dbNames;
        return this;
    }
    public set dbNames(dbNames: Array<string> | undefined) {
        this['db_names'] = dbNames;
    }
    public get dbNames() {
        return this['db_names'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDbObjectsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
