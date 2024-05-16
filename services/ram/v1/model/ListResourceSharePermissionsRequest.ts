

export class ListResourceSharePermissionsRequest {
    private 'resource_share_id'?: string;
    private 'permission_name'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(resourceShareId?: string) { 
        this['resource_share_id'] = resourceShareId;
    }
    public withResourceShareId(resourceShareId: string): ListResourceSharePermissionsRequest {
        this['resource_share_id'] = resourceShareId;
        return this;
    }
    public set resourceShareId(resourceShareId: string  | undefined) {
        this['resource_share_id'] = resourceShareId;
    }
    public get resourceShareId(): string | undefined {
        return this['resource_share_id'];
    }
    public withPermissionName(permissionName: string): ListResourceSharePermissionsRequest {
        this['permission_name'] = permissionName;
        return this;
    }
    public set permissionName(permissionName: string  | undefined) {
        this['permission_name'] = permissionName;
    }
    public get permissionName(): string | undefined {
        return this['permission_name'];
    }
    public withLimit(limit: number): ListResourceSharePermissionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListResourceSharePermissionsRequest {
        this['marker'] = marker;
        return this;
    }
}