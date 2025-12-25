

export class ShowShipperParamRequest {
    private 'workspace_id'?: string;
    private 'param_type'?: string;
    public param?: string;
    public constructor(workspaceId?: string, paramType?: string) { 
        this['workspace_id'] = workspaceId;
        this['param_type'] = paramType;
    }
    public withWorkspaceId(workspaceId: string): ShowShipperParamRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withParamType(paramType: string): ShowShipperParamRequest {
        this['param_type'] = paramType;
        return this;
    }
    public set paramType(paramType: string  | undefined) {
        this['param_type'] = paramType;
    }
    public get paramType(): string | undefined {
        return this['param_type'];
    }
    public withParam(param: string): ShowShipperParamRequest {
        this['param'] = param;
        return this;
    }
}