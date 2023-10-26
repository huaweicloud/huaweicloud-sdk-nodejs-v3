

export class WorkflowQueryParam {
    public search?: string;
    public type?: string;
    public tags?: { [key: string]: string; };
    public page?: number;
    public size?: number;
    private 'enterprise_project_id'?: string;
    private 'create_by'?: string;
    private 'sort_field'?: string;
    private 'sort_type'?: string;
    private 'search_time_start'?: number;
    private 'search_time_end'?: number;
    public status?: string;
    public constructor(sortField?: string, sortType?: string) { 
        this['sort_field'] = sortField;
        this['sort_type'] = sortType;
    }
    public withSearch(search: string): WorkflowQueryParam {
        this['search'] = search;
        return this;
    }
    public withType(type: string): WorkflowQueryParam {
        this['type'] = type;
        return this;
    }
    public withTags(tags: { [key: string]: string; }): WorkflowQueryParam {
        this['tags'] = tags;
        return this;
    }
    public withPage(page: number): WorkflowQueryParam {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): WorkflowQueryParam {
        this['size'] = size;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): WorkflowQueryParam {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreateBy(createBy: string): WorkflowQueryParam {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withSortField(sortField: string): WorkflowQueryParam {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: string): WorkflowQueryParam {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): string | undefined {
        return this['sort_type'];
    }
    public withSearchTimeStart(searchTimeStart: number): WorkflowQueryParam {
        this['search_time_start'] = searchTimeStart;
        return this;
    }
    public set searchTimeStart(searchTimeStart: number  | undefined) {
        this['search_time_start'] = searchTimeStart;
    }
    public get searchTimeStart(): number | undefined {
        return this['search_time_start'];
    }
    public withSearchTimeEnd(searchTimeEnd: number): WorkflowQueryParam {
        this['search_time_end'] = searchTimeEnd;
        return this;
    }
    public set searchTimeEnd(searchTimeEnd: number  | undefined) {
        this['search_time_end'] = searchTimeEnd;
    }
    public get searchTimeEnd(): number | undefined {
        return this['search_time_end'];
    }
    public withStatus(status: string): WorkflowQueryParam {
        this['status'] = status;
        return this;
    }
}