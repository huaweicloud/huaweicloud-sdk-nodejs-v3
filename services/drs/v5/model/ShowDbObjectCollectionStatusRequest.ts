

export class ShowDbObjectCollectionStatusRequest {
    private 'job_id': string | undefined;
    private 'X-Language'?: string | undefined;
    private 'query_id': string | undefined;
    public constructor(jobId?: any, queryId?: any) { 
        this['job_id'] = jobId;
        this['query_id'] = queryId;
    }
    public withJobId(jobId: string): ShowDbObjectCollectionStatusRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: string): ShowDbObjectCollectionStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withQueryId(queryId: string): ShowDbObjectCollectionStatusRequest {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId() {
        return this['query_id'];
    }
}