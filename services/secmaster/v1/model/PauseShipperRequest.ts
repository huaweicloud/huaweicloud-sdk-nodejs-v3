

export class PauseShipperRequest {
    private 'workspace_id'?: string;
    private 'shipper_id'?: string;
    public constructor(workspaceId?: string, shipperId?: string) { 
        this['workspace_id'] = workspaceId;
        this['shipper_id'] = shipperId;
    }
    public withWorkspaceId(workspaceId: string): PauseShipperRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withShipperId(shipperId: string): PauseShipperRequest {
        this['shipper_id'] = shipperId;
        return this;
    }
    public set shipperId(shipperId: string  | undefined) {
        this['shipper_id'] = shipperId;
    }
    public get shipperId(): string | undefined {
        return this['shipper_id'];
    }
}