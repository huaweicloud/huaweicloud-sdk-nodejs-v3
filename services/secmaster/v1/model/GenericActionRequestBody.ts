

export class GenericActionRequestBody {
    public type?: string;
    private 'workspace_id'?: string;
    public parameter?: object;
    public constructor(type?: string, parameter?: object) { 
        this['type'] = type;
        this['parameter'] = parameter;
    }
    public withType(type: string): GenericActionRequestBody {
        this['type'] = type;
        return this;
    }
    public withWorkspaceId(workspaceId: string): GenericActionRequestBody {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withParameter(parameter: object): GenericActionRequestBody {
        this['parameter'] = parameter;
        return this;
    }
}