

export class ShowModuleRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'module_id'?: string;
    public constructor(contentType?: string, workspaceId?: string, moduleId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['module_id'] = moduleId;
    }
    public withContentType(contentType: string): ShowModuleRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ShowModuleRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withModuleId(moduleId: string): ShowModuleRequest {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
}