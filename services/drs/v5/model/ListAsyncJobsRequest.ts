

export class ListAsyncJobsRequest {
    private 'X-Language'?: ListAsyncJobsRequestXLanguageEnum | string;
    private 'async_job_id'?: string;
    public status?: string;
    private 'domain_name'?: string;
    private 'user_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListAsyncJobsRequestXLanguageEnum | string): ListAsyncJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListAsyncJobsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListAsyncJobsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withAsyncJobId(asyncJobId: string): ListAsyncJobsRequest {
        this['async_job_id'] = asyncJobId;
        return this;
    }
    public set asyncJobId(asyncJobId: string  | undefined) {
        this['async_job_id'] = asyncJobId;
    }
    public get asyncJobId(): string | undefined {
        return this['async_job_id'];
    }
    public withStatus(status: string): ListAsyncJobsRequest {
        this['status'] = status;
        return this;
    }
    public withDomainName(domainName: string): ListAsyncJobsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withUserName(userName: string): ListAsyncJobsRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withOffset(offset: number): ListAsyncJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAsyncJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListAsyncJobsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListAsyncJobsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAsyncJobsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
