

export class ShowDatapanelObjectRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    public dataclass?: string;
    private 'dataobject_id'?: string;
    public constructor(contentType?: string, workspaceId?: string, dataclass?: string, dataobjectId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['dataclass'] = dataclass;
        this['dataobject_id'] = dataobjectId;
    }
    public withContentType(contentType: string): ShowDatapanelObjectRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ShowDatapanelObjectRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataclass(dataclass: string): ShowDatapanelObjectRequest {
        this['dataclass'] = dataclass;
        return this;
    }
    public withDataobjectId(dataobjectId: string): ShowDatapanelObjectRequest {
        this['dataobject_id'] = dataobjectId;
        return this;
    }
    public set dataobjectId(dataobjectId: string  | undefined) {
        this['dataobject_id'] = dataobjectId;
    }
    public get dataobjectId(): string | undefined {
        return this['dataobject_id'];
    }
}