

export class Grant {
    public permission?: string;
    private 'grant_with'?: boolean;
    public constructor(permission?: string, grantWith?: boolean) { 
        this['permission'] = permission;
        this['grant_with'] = grantWith;
    }
    public withPermission(permission: string): Grant {
        this['permission'] = permission;
        return this;
    }
    public withGrantWith(grantWith: boolean): Grant {
        this['grant_with'] = grantWith;
        return this;
    }
    public set grantWith(grantWith: boolean  | undefined) {
        this['grant_with'] = grantWith;
    }
    public get grantWith(): boolean | undefined {
        return this['grant_with'];
    }
}