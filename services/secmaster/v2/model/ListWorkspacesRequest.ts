

export class ListWorkspacesRequest {
    private 'content-type'?: string;
    public offset?: number;
    public limit?: number;
    private 'region_id'?: string;
    public name?: string;
    public description?: string;
    private 'view_bind_id'?: string;
    private 'view_bind_name'?: string;
    private 'create_time_start'?: string;
    private 'create_time_end'?: string;
    private 'is_view'?: boolean;
    public ids?: string;
    private 'normal_project_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(contentType?: string, offset?: number, limit?: number) { 
        this['content-type'] = contentType;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withContentType(contentType: string): ListWorkspacesRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withOffset(offset: number): ListWorkspacesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWorkspacesRequest {
        this['limit'] = limit;
        return this;
    }
    public withRegionId(regionId: string): ListWorkspacesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withName(name: string): ListWorkspacesRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListWorkspacesRequest {
        this['description'] = description;
        return this;
    }
    public withViewBindId(viewBindId: string): ListWorkspacesRequest {
        this['view_bind_id'] = viewBindId;
        return this;
    }
    public set viewBindId(viewBindId: string  | undefined) {
        this['view_bind_id'] = viewBindId;
    }
    public get viewBindId(): string | undefined {
        return this['view_bind_id'];
    }
    public withViewBindName(viewBindName: string): ListWorkspacesRequest {
        this['view_bind_name'] = viewBindName;
        return this;
    }
    public set viewBindName(viewBindName: string  | undefined) {
        this['view_bind_name'] = viewBindName;
    }
    public get viewBindName(): string | undefined {
        return this['view_bind_name'];
    }
    public withCreateTimeStart(createTimeStart: string): ListWorkspacesRequest {
        this['create_time_start'] = createTimeStart;
        return this;
    }
    public set createTimeStart(createTimeStart: string  | undefined) {
        this['create_time_start'] = createTimeStart;
    }
    public get createTimeStart(): string | undefined {
        return this['create_time_start'];
    }
    public withCreateTimeEnd(createTimeEnd: string): ListWorkspacesRequest {
        this['create_time_end'] = createTimeEnd;
        return this;
    }
    public set createTimeEnd(createTimeEnd: string  | undefined) {
        this['create_time_end'] = createTimeEnd;
    }
    public get createTimeEnd(): string | undefined {
        return this['create_time_end'];
    }
    public withIsView(isView: boolean): ListWorkspacesRequest {
        this['is_view'] = isView;
        return this;
    }
    public set isView(isView: boolean  | undefined) {
        this['is_view'] = isView;
    }
    public get isView(): boolean | undefined {
        return this['is_view'];
    }
    public withIds(ids: string): ListWorkspacesRequest {
        this['ids'] = ids;
        return this;
    }
    public withNormalProjectId(normalProjectId: string): ListWorkspacesRequest {
        this['normal_project_id'] = normalProjectId;
        return this;
    }
    public set normalProjectId(normalProjectId: string  | undefined) {
        this['normal_project_id'] = normalProjectId;
    }
    public get normalProjectId(): string | undefined {
        return this['normal_project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWorkspacesRequest {
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