

export class RoleMember {
    public name?: string;
    public desc?: string;
    public permission?: boolean;
    private 'grant_with'?: boolean;
    public constructor() { 
    }
    public withName(name: string): RoleMember {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): RoleMember {
        this['desc'] = desc;
        return this;
    }
    public withPermission(permission: boolean): RoleMember {
        this['permission'] = permission;
        return this;
    }
    public withGrantWith(grantWith: boolean): RoleMember {
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