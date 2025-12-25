

export class RetryShipperAuthorizationRequest {
    private 'workspace_id'?: string;
    private 'shipper_id'?: string;
    public param?: string;
    public constructor(workspaceId?: string, shipperId?: string) { 
        this['workspace_id'] = workspaceId;
        this['shipper_id'] = shipperId;
    }
    public withWorkspaceId(workspaceId: string): RetryShipperAuthorizationRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withShipperId(shipperId: string): RetryShipperAuthorizationRequest {
        this['shipper_id'] = shipperId;
        return this;
    }
    public set shipperId(shipperId: string  | undefined) {
        this['shipper_id'] = shipperId;
    }
    public get shipperId(): string | undefined {
        return this['shipper_id'];
    }
    public withParam(param: string): RetryShipperAuthorizationRequest {
        this['param'] = param;
        return this;
    }
}