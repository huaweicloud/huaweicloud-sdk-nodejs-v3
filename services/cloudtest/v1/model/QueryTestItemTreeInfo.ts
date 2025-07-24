

export class QueryTestItemTreeInfo {
    public owner?: string;
    public stage?: string;
    public activity?: string;
    private 'version_uri'?: string;
    private 'task_uri'?: string;
    private 'service_type'?: string;
    private 'contain_total'?: boolean;
    private 'project_uuid'?: string;
    private 'sort_type'?: string;
    private 'page_number'?: number;
    private 'page_size'?: number;
    public constructor() { 
    }
    public withOwner(owner: string): QueryTestItemTreeInfo {
        this['owner'] = owner;
        return this;
    }
    public withStage(stage: string): QueryTestItemTreeInfo {
        this['stage'] = stage;
        return this;
    }
    public withActivity(activity: string): QueryTestItemTreeInfo {
        this['activity'] = activity;
        return this;
    }
    public withVersionUri(versionUri: string): QueryTestItemTreeInfo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withTaskUri(taskUri: string): QueryTestItemTreeInfo {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withServiceType(serviceType: string): QueryTestItemTreeInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withContainTotal(containTotal: boolean): QueryTestItemTreeInfo {
        this['contain_total'] = containTotal;
        return this;
    }
    public set containTotal(containTotal: boolean  | undefined) {
        this['contain_total'] = containTotal;
    }
    public get containTotal(): boolean | undefined {
        return this['contain_total'];
    }
    public withProjectUuid(projectUuid: string): QueryTestItemTreeInfo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withSortType(sortType: string): QueryTestItemTreeInfo {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): string | undefined {
        return this['sort_type'];
    }
    public withPageNumber(pageNumber: number): QueryTestItemTreeInfo {
        this['page_number'] = pageNumber;
        return this;
    }
    public set pageNumber(pageNumber: number  | undefined) {
        this['page_number'] = pageNumber;
    }
    public get pageNumber(): number | undefined {
        return this['page_number'];
    }
    public withPageSize(pageSize: number): QueryTestItemTreeInfo {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}