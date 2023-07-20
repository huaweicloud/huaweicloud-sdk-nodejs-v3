

export class QueryCompareResultReq {
    private 'job_id'?: string;
    private 'object_level_compare_id'?: string;
    private 'line_compare_id'?: string;
    private 'content_compare_id'?: string;
    private 'current_page'?: number;
    private 'per_page'?: number;
    public constructor(jobId?: string, currentPage?: number, perPage?: number) { 
        this['job_id'] = jobId;
        this['current_page'] = currentPage;
        this['per_page'] = perPage;
    }
    public withJobId(jobId: string): QueryCompareResultReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withObjectLevelCompareId(objectLevelCompareId: string): QueryCompareResultReq {
        this['object_level_compare_id'] = objectLevelCompareId;
        return this;
    }
    public set objectLevelCompareId(objectLevelCompareId: string  | undefined) {
        this['object_level_compare_id'] = objectLevelCompareId;
    }
    public get objectLevelCompareId(): string | undefined {
        return this['object_level_compare_id'];
    }
    public withLineCompareId(lineCompareId: string): QueryCompareResultReq {
        this['line_compare_id'] = lineCompareId;
        return this;
    }
    public set lineCompareId(lineCompareId: string  | undefined) {
        this['line_compare_id'] = lineCompareId;
    }
    public get lineCompareId(): string | undefined {
        return this['line_compare_id'];
    }
    public withContentCompareId(contentCompareId: string): QueryCompareResultReq {
        this['content_compare_id'] = contentCompareId;
        return this;
    }
    public set contentCompareId(contentCompareId: string  | undefined) {
        this['content_compare_id'] = contentCompareId;
    }
    public get contentCompareId(): string | undefined {
        return this['content_compare_id'];
    }
    public withCurrentPage(currentPage: number): QueryCompareResultReq {
        this['current_page'] = currentPage;
        return this;
    }
    public set currentPage(currentPage: number  | undefined) {
        this['current_page'] = currentPage;
    }
    public get currentPage(): number | undefined {
        return this['current_page'];
    }
    public withPerPage(perPage: number): QueryCompareResultReq {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
}