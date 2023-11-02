

export class DeleteStandardTemplateRequest {
    public workspace?: string;
    public ids?: string;
    public constructor(workspace?: string, ids?: string) { 
        this['workspace'] = workspace;
        this['ids'] = ids;
    }
    public withWorkspace(workspace: string): DeleteStandardTemplateRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withIds(ids: string): DeleteStandardTemplateRequest {
        this['ids'] = ids;
        return this;
    }
}