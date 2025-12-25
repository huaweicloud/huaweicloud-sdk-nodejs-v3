

export class ShowLayoutRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'layout_id'?: string;
    public constructor(contentType?: string, workspaceId?: string, layoutId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['layout_id'] = layoutId;
    }
    public withContentType(contentType: string): ShowLayoutRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ShowLayoutRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withLayoutId(layoutId: string): ShowLayoutRequest {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
}