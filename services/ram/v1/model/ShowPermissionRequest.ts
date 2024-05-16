

export class ShowPermissionRequest {
    private 'permission_id'?: string;
    private 'permission_version'?: number;
    public constructor(permissionId?: string) { 
        this['permission_id'] = permissionId;
    }
    public withPermissionId(permissionId: string): ShowPermissionRequest {
        this['permission_id'] = permissionId;
        return this;
    }
    public set permissionId(permissionId: string  | undefined) {
        this['permission_id'] = permissionId;
    }
    public get permissionId(): string | undefined {
        return this['permission_id'];
    }
    public withPermissionVersion(permissionVersion: number): ShowPermissionRequest {
        this['permission_version'] = permissionVersion;
        return this;
    }
    public set permissionVersion(permissionVersion: number  | undefined) {
        this['permission_version'] = permissionVersion;
    }
    public get permissionVersion(): number | undefined {
        return this['permission_version'];
    }
}