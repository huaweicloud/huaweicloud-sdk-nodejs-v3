

export class ListLatestVersionFilesRequest {
    public name?: string;
    private 'sort_by'?: string;
    private 'sort_dir'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withName(name: string): ListLatestVersionFilesRequest {
        this['name'] = name;
        return this;
    }
    public withSortBy(sortBy: string): ListLatestVersionFilesRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withSortDir(sortDir: string): ListLatestVersionFilesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withOffset(offset: number): ListLatestVersionFilesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLatestVersionFilesRequest {
        this['limit'] = limit;
        return this;
    }
}