

export class ListAllRepositoriesRequest {
    private 'tenant_id'?: string;
    private 'group_id'?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public sort?: string;
    public qname?: string;
    public type?: string;
    public format?: string;
    private 'format_list'?: string;
    private 'is_recycle_bin'?: boolean;
    private 'is_need_paging'?: boolean;
    private 'in_project'?: boolean;
    public constructor(tenantId?: string) { 
        this['tenant_id'] = tenantId;
    }
    public withTenantId(tenantId: string): ListAllRepositoriesRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withGroupId(groupId: string): ListAllRepositoriesRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withPageNo(pageNo: number): ListAllRepositoriesRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ListAllRepositoriesRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withSort(sort: string): ListAllRepositoriesRequest {
        this['sort'] = sort;
        return this;
    }
    public withQname(qname: string): ListAllRepositoriesRequest {
        this['qname'] = qname;
        return this;
    }
    public withType(type: string): ListAllRepositoriesRequest {
        this['type'] = type;
        return this;
    }
    public withFormat(format: string): ListAllRepositoriesRequest {
        this['format'] = format;
        return this;
    }
    public withFormatList(formatList: string): ListAllRepositoriesRequest {
        this['format_list'] = formatList;
        return this;
    }
    public set formatList(formatList: string  | undefined) {
        this['format_list'] = formatList;
    }
    public get formatList(): string | undefined {
        return this['format_list'];
    }
    public withIsRecycleBin(isRecycleBin: boolean): ListAllRepositoriesRequest {
        this['is_recycle_bin'] = isRecycleBin;
        return this;
    }
    public set isRecycleBin(isRecycleBin: boolean  | undefined) {
        this['is_recycle_bin'] = isRecycleBin;
    }
    public get isRecycleBin(): boolean | undefined {
        return this['is_recycle_bin'];
    }
    public withIsNeedPaging(isNeedPaging: boolean): ListAllRepositoriesRequest {
        this['is_need_paging'] = isNeedPaging;
        return this;
    }
    public set isNeedPaging(isNeedPaging: boolean  | undefined) {
        this['is_need_paging'] = isNeedPaging;
    }
    public get isNeedPaging(): boolean | undefined {
        return this['is_need_paging'];
    }
    public withInProject(inProject: boolean): ListAllRepositoriesRequest {
        this['in_project'] = inProject;
        return this;
    }
    public set inProject(inProject: boolean  | undefined) {
        this['in_project'] = inProject;
    }
    public get inProject(): boolean | undefined {
        return this['in_project'];
    }
}