

export class ListShipperAuthorizationsRequest {
    private 'workspace_id'?: string;
    private 'source_region'?: string;
    private 'destination_shipper_type'?: string;
    private 'shipper_status'?: string;
    private 'auth_status'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListShipperAuthorizationsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withSourceRegion(sourceRegion: string): ListShipperAuthorizationsRequest {
        this['source_region'] = sourceRegion;
        return this;
    }
    public set sourceRegion(sourceRegion: string  | undefined) {
        this['source_region'] = sourceRegion;
    }
    public get sourceRegion(): string | undefined {
        return this['source_region'];
    }
    public withDestinationShipperType(destinationShipperType: string): ListShipperAuthorizationsRequest {
        this['destination_shipper_type'] = destinationShipperType;
        return this;
    }
    public set destinationShipperType(destinationShipperType: string  | undefined) {
        this['destination_shipper_type'] = destinationShipperType;
    }
    public get destinationShipperType(): string | undefined {
        return this['destination_shipper_type'];
    }
    public withShipperStatus(shipperStatus: string): ListShipperAuthorizationsRequest {
        this['shipper_status'] = shipperStatus;
        return this;
    }
    public set shipperStatus(shipperStatus: string  | undefined) {
        this['shipper_status'] = shipperStatus;
    }
    public get shipperStatus(): string | undefined {
        return this['shipper_status'];
    }
    public withAuthStatus(authStatus: string): ListShipperAuthorizationsRequest {
        this['auth_status'] = authStatus;
        return this;
    }
    public set authStatus(authStatus: string  | undefined) {
        this['auth_status'] = authStatus;
    }
    public get authStatus(): string | undefined {
        return this['auth_status'];
    }
    public withLimit(limit: number): ListShipperAuthorizationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListShipperAuthorizationsRequest {
        this['offset'] = offset;
        return this;
    }
}