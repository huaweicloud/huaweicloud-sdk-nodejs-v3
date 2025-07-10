

export class ShowCommitsByRepoIdRequest {
    public author?: string;
    private 'begin_date'?: string;
    private 'end_date'?: string;
    public message?: string;
    private 'page_index'?: number;
    private 'page_size'?: number;
    public path?: string;
    private 'ref_name'?: string;
    private 'repository_id'?: number;
    private 'stat_format'?: string;
    public constructor(refName?: string, repositoryId?: number) { 
        this['ref_name'] = refName;
        this['repository_id'] = repositoryId;
    }
    public withAuthor(author: string): ShowCommitsByRepoIdRequest {
        this['author'] = author;
        return this;
    }
    public withBeginDate(beginDate: string): ShowCommitsByRepoIdRequest {
        this['begin_date'] = beginDate;
        return this;
    }
    public set beginDate(beginDate: string  | undefined) {
        this['begin_date'] = beginDate;
    }
    public get beginDate(): string | undefined {
        return this['begin_date'];
    }
    public withEndDate(endDate: string): ShowCommitsByRepoIdRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
    public withMessage(message: string): ShowCommitsByRepoIdRequest {
        this['message'] = message;
        return this;
    }
    public withPageIndex(pageIndex: number): ShowCommitsByRepoIdRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): number | undefined {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ShowCommitsByRepoIdRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPath(path: string): ShowCommitsByRepoIdRequest {
        this['path'] = path;
        return this;
    }
    public withRefName(refName: string): ShowCommitsByRepoIdRequest {
        this['ref_name'] = refName;
        return this;
    }
    public set refName(refName: string  | undefined) {
        this['ref_name'] = refName;
    }
    public get refName(): string | undefined {
        return this['ref_name'];
    }
    public withRepositoryId(repositoryId: number): ShowCommitsByRepoIdRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withStatFormat(statFormat: string): ShowCommitsByRepoIdRequest {
        this['stat_format'] = statFormat;
        return this;
    }
    public set statFormat(statFormat: string  | undefined) {
        this['stat_format'] = statFormat;
    }
    public get statFormat(): string | undefined {
        return this['stat_format'];
    }
}