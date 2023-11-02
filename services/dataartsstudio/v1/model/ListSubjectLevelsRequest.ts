

export class ListSubjectLevelsRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSubjectLevelsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListSubjectLevelsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSubjectLevelsRequest {
        this['offset'] = offset;
        return this;
    }
}