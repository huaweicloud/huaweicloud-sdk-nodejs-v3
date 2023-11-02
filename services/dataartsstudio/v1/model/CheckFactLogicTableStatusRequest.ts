

export class CheckFactLogicTableStatusRequest {
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CheckFactLogicTableStatusRequest {
        this['workspace'] = workspace;
        return this;
    }
}