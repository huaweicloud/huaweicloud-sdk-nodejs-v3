

export class DeleteDirectoryRequest {
    public workspace?: string;
    public ids?: Array<number>;
    public constructor(workspace?: string, ids?: Array<number>) { 
        this['workspace'] = workspace;
        this['ids'] = ids;
    }
    public withWorkspace(workspace: string): DeleteDirectoryRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withIds(ids: Array<number>): DeleteDirectoryRequest {
        this['ids'] = ids;
        return this;
    }
}