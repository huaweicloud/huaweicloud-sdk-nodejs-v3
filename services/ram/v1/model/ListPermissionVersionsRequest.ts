

export class ListPermissionVersionsRequest {
    public limit?: number;
    public marker?: string;
    private 'permission_id'?: string;
    public constructor(permissionId?: string) { 
        this['permission_id'] = permissionId;
    }
    public withLimit(limit: number): ListPermissionVersionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPermissionVersionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPermissionId(permissionId: string): ListPermissionVersionsRequest {
        this['permission_id'] = permissionId;
        return this;
    }
    public set permissionId(permissionId: string  | undefined) {
        this['permission_id'] = permissionId;
    }
    public get permissionId(): string | undefined {
        return this['permission_id'];
    }
}