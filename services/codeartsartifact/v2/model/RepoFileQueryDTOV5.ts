import { PageParam } from './PageParam';


export class RepoFileQueryDTOV5 {
    private 'page_no'?: number;
    private 'page_size'?: number;
    private 'parent_id'?: string;
    private 'project_id'?: string;
    private 'search_name'?: string;
    private 'search_type'?: string;
    public extension?: string;
    private 'order_by'?: string;
    public sort?: string;
    public status?: string;
    public category?: string;
    public constructor() { 
    }
    public withPageNo(pageNo: number): RepoFileQueryDTOV5 {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): RepoFileQueryDTOV5 {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withParentId(parentId: string): RepoFileQueryDTOV5 {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withProjectId(projectId: string): RepoFileQueryDTOV5 {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSearchName(searchName: string): RepoFileQueryDTOV5 {
        this['search_name'] = searchName;
        return this;
    }
    public set searchName(searchName: string  | undefined) {
        this['search_name'] = searchName;
    }
    public get searchName(): string | undefined {
        return this['search_name'];
    }
    public withSearchType(searchType: string): RepoFileQueryDTOV5 {
        this['search_type'] = searchType;
        return this;
    }
    public set searchType(searchType: string  | undefined) {
        this['search_type'] = searchType;
    }
    public get searchType(): string | undefined {
        return this['search_type'];
    }
    public withExtension(extension: string): RepoFileQueryDTOV5 {
        this['extension'] = extension;
        return this;
    }
    public withOrderBy(orderBy: string): RepoFileQueryDTOV5 {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withSort(sort: string): RepoFileQueryDTOV5 {
        this['sort'] = sort;
        return this;
    }
    public withStatus(status: string): RepoFileQueryDTOV5 {
        this['status'] = status;
        return this;
    }
    public withCategory(category: string): RepoFileQueryDTOV5 {
        this['category'] = category;
        return this;
    }
}