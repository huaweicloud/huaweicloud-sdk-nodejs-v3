import { IssueListFilterInfo } from './IssueListFilterInfo';


export class QueryIssueTreeInfo {
    private 'service_type'?: number;
    private 'service_types'?: Array<number>;
    private 'parent_id'?: string;
    private 'page_number'?: number;
    private 'page_size'?: number;
    public filter?: IssueListFilterInfo;
    private 'tracker_id'?: string;
    private 'module_id'?: string;
    private 'task_uri'?: string;
    private 'include_sub_issue'?: boolean;
    public constructor() { 
    }
    public withServiceType(serviceType: number): QueryIssueTreeInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: number  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): number | undefined {
        return this['service_type'];
    }
    public withServiceTypes(serviceTypes: Array<number>): QueryIssueTreeInfo {
        this['service_types'] = serviceTypes;
        return this;
    }
    public set serviceTypes(serviceTypes: Array<number>  | undefined) {
        this['service_types'] = serviceTypes;
    }
    public get serviceTypes(): Array<number> | undefined {
        return this['service_types'];
    }
    public withParentId(parentId: string): QueryIssueTreeInfo {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withPageNumber(pageNumber: number): QueryIssueTreeInfo {
        this['page_number'] = pageNumber;
        return this;
    }
    public set pageNumber(pageNumber: number  | undefined) {
        this['page_number'] = pageNumber;
    }
    public get pageNumber(): number | undefined {
        return this['page_number'];
    }
    public withPageSize(pageSize: number): QueryIssueTreeInfo {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withFilter(filter: IssueListFilterInfo): QueryIssueTreeInfo {
        this['filter'] = filter;
        return this;
    }
    public withTrackerId(trackerId: string): QueryIssueTreeInfo {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: string  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): string | undefined {
        return this['tracker_id'];
    }
    public withModuleId(moduleId: string): QueryIssueTreeInfo {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withTaskUri(taskUri: string): QueryIssueTreeInfo {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withIncludeSubIssue(includeSubIssue: boolean): QueryIssueTreeInfo {
        this['include_sub_issue'] = includeSubIssue;
        return this;
    }
    public set includeSubIssue(includeSubIssue: boolean  | undefined) {
        this['include_sub_issue'] = includeSubIssue;
    }
    public get includeSubIssue(): boolean | undefined {
        return this['include_sub_issue'];
    }
}