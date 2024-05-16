

export class DeleteSecurityAssignedQueueRequest {
    public workspace?: string;
    public id?: string;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): DeleteSecurityAssignedQueueRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): DeleteSecurityAssignedQueueRequest {
        this['id'] = id;
        return this;
    }
}