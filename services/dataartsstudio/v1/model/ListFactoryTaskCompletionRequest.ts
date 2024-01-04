

export class ListFactoryTaskCompletionRequest {
    public workspace?: string;
    public type?: string;
    public constructor() { 
    }
    public withWorkspace(workspace: string): ListFactoryTaskCompletionRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withType(type: string): ListFactoryTaskCompletionRequest {
        this['type'] = type;
        return this;
    }
}