

export class SearchScriptsRequestBody {
    public name?: string;
    private 'is_default'?: string;
    private 'create_by'?: string;
    private 'script_id'?: string;
    private 'page_num'?: number;
    private 'page_size'?: number;
    private 'project_id'?: string;
    private 'order_by_column'?: string;
    private 'sort_order'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(scriptId?: string, orderByColumn?: string, sortOrder?: string) { 
        this['script_id'] = scriptId;
        this['order_by_column'] = orderByColumn;
        this['sort_order'] = sortOrder;
    }
    public withName(name: string): SearchScriptsRequestBody {
        this['name'] = name;
        return this;
    }
    public withIsDefault(isDefault: string): SearchScriptsRequestBody {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: string  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): string | undefined {
        return this['is_default'];
    }
    public withCreateBy(createBy: string): SearchScriptsRequestBody {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withScriptId(scriptId: string): SearchScriptsRequestBody {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withPageNum(pageNum: number): SearchScriptsRequestBody {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): SearchScriptsRequestBody {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withProjectId(projectId: string): SearchScriptsRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOrderByColumn(orderByColumn: string): SearchScriptsRequestBody {
        this['order_by_column'] = orderByColumn;
        return this;
    }
    public set orderByColumn(orderByColumn: string  | undefined) {
        this['order_by_column'] = orderByColumn;
    }
    public get orderByColumn(): string | undefined {
        return this['order_by_column'];
    }
    public withSortOrder(sortOrder: string): SearchScriptsRequestBody {
        this['sort_order'] = sortOrder;
        return this;
    }
    public set sortOrder(sortOrder: string  | undefined) {
        this['sort_order'] = sortOrder;
    }
    public get sortOrder(): string | undefined {
        return this['sort_order'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SearchScriptsRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}