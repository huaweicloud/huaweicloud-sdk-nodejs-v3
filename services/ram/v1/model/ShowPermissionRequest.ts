

export class ShowPermissionRequest {
    private 'permission_id'?: string;
    private 'X-Security-Token'?: string;
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
    public withXSecurityToken(xSecurityToken: string): ShowPermissionRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
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