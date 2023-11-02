

export class CheckDimensionStatusRequest {
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CheckDimensionStatusRequest {
        this['workspace'] = workspace;
        return this;
    }
}