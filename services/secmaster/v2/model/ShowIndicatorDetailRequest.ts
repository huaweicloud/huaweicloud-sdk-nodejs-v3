

export class ShowIndicatorDetailRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'indicator_id'?: string;
    public constructor(contentType?: string, workspaceId?: string, indicatorId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['indicator_id'] = indicatorId;
    }
    public withContentType(contentType: string): ShowIndicatorDetailRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ShowIndicatorDetailRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withIndicatorId(indicatorId: string): ShowIndicatorDetailRequest {
        this['indicator_id'] = indicatorId;
        return this;
    }
    public set indicatorId(indicatorId: string  | undefined) {
        this['indicator_id'] = indicatorId;
    }
    public get indicatorId(): string | undefined {
        return this['indicator_id'];
    }
}