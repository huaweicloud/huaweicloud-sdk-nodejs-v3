

export class KeystoneShowPermissionRequest {
    private 'role_id': string | undefined;
    public constructor(roleId?: any) { 
        this['role_id'] = roleId;
    }
    public withRoleId(roleId: string): KeystoneShowPermissionRequest {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId() {
        return this['role_id'];
    }
}