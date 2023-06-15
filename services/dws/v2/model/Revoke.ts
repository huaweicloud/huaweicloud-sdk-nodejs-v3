

export class Revoke {
    public permission: string;
    private 'revoke_with': boolean | undefined;
    public constructor(permission?: any, revokeWith?: any) { 
        this['permission'] = permission;
        this['revoke_with'] = revokeWith;
    }
    public withPermission(permission: string): Revoke {
        this['permission'] = permission;
        return this;
    }
    public withRevokeWith(revokeWith: boolean): Revoke {
        this['revoke_with'] = revokeWith;
        return this;
    }
    public set revokeWith(revokeWith: boolean | undefined) {
        this['revoke_with'] = revokeWith;
    }
    public get revokeWith() {
        return this['revoke_with'];
    }
}