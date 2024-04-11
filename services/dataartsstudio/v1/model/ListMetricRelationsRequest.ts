

export class ListMetricRelationsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public id?: string;
    private 'biz_type'?: string;
    public constructor(workspace?: string, id?: string, bizType?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
        this['biz_type'] = bizType;
    }
    public withWorkspace(workspace: string): ListMetricRelationsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListMetricRelationsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListMetricRelationsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withId(id: string): ListMetricRelationsRequest {
        this['id'] = id;
        return this;
    }
    public withBizType(bizType: string): ListMetricRelationsRequest {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: string  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): string | undefined {
        return this['biz_type'];
    }
}