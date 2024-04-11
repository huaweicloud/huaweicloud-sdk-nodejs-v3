

export class CountStandardsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public id?: string;
    private 'biz_type'?: string;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): CountStandardsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): CountStandardsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): CountStandardsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withId(id: string): CountStandardsRequest {
        this['id'] = id;
        return this;
    }
    public withBizType(bizType: string): CountStandardsRequest {
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