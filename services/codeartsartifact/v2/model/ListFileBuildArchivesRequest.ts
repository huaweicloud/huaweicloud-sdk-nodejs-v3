

export class ListFileBuildArchivesRequest {
    private 'parent_id'?: string;
    private 'build_id'?: string;
    private 'build_no'?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    private 'repo_branch'?: string;
    public constructor() { 
    }
    public withParentId(parentId: string): ListFileBuildArchivesRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withBuildId(buildId: string): ListFileBuildArchivesRequest {
        this['build_id'] = buildId;
        return this;
    }
    public set buildId(buildId: string  | undefined) {
        this['build_id'] = buildId;
    }
    public get buildId(): string | undefined {
        return this['build_id'];
    }
    public withBuildNo(buildNo: string): ListFileBuildArchivesRequest {
        this['build_no'] = buildNo;
        return this;
    }
    public set buildNo(buildNo: string  | undefined) {
        this['build_no'] = buildNo;
    }
    public get buildNo(): string | undefined {
        return this['build_no'];
    }
    public withPageNo(pageNo: number): ListFileBuildArchivesRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ListFileBuildArchivesRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withRepoBranch(repoBranch: string): ListFileBuildArchivesRequest {
        this['repo_branch'] = repoBranch;
        return this;
    }
    public set repoBranch(repoBranch: string  | undefined) {
        this['repo_branch'] = repoBranch;
    }
    public get repoBranch(): string | undefined {
        return this['repo_branch'];
    }
}