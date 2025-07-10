

export class ShowAllRepositoryByTwoProjectIdRequest {
    private 'page_index'?: number;
    private 'page_size'?: number;
    private 'project_uuid'?: string;
    public search?: string;
    public constructor(projectUuid?: string) { 
        this['project_uuid'] = projectUuid;
    }
    public withPageIndex(pageIndex: number): ShowAllRepositoryByTwoProjectIdRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): number | undefined {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ShowAllRepositoryByTwoProjectIdRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withProjectUuid(projectUuid: string): ShowAllRepositoryByTwoProjectIdRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withSearch(search: string): ShowAllRepositoryByTwoProjectIdRequest {
        this['search'] = search;
        return this;
    }
}