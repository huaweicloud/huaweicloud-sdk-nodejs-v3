

export class ListProjectsV4Request {
    public offset?: number;
    public limit?: number;
    public search?: string;
    private 'project_type'?: string;
    public sort?: string;
    public archive?: string;
    private 'query_type'?: string;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withOffset(offset: number): ListProjectsV4Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProjectsV4Request {
        this['limit'] = limit;
        return this;
    }
    public withSearch(search: string): ListProjectsV4Request {
        this['search'] = search;
        return this;
    }
    public withProjectType(projectType: string): ListProjectsV4Request {
        this['project_type'] = projectType;
        return this;
    }
    public set projectType(projectType: string  | undefined) {
        this['project_type'] = projectType;
    }
    public get projectType(): string | undefined {
        return this['project_type'];
    }
    public withSort(sort: string): ListProjectsV4Request {
        this['sort'] = sort;
        return this;
    }
    public withArchive(archive: string): ListProjectsV4Request {
        this['archive'] = archive;
        return this;
    }
    public withQueryType(queryType: string): ListProjectsV4Request {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): string | undefined {
        return this['query_type'];
    }
}