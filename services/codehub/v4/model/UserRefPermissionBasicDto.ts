

export class UserRefPermissionBasicDto {
    private 'has_permission'?: boolean;
    private 'is_protect'?: boolean;
    public constructor() { 
    }
    public withHasPermission(hasPermission: boolean): UserRefPermissionBasicDto {
        this['has_permission'] = hasPermission;
        return this;
    }
    public set hasPermission(hasPermission: boolean  | undefined) {
        this['has_permission'] = hasPermission;
    }
    public get hasPermission(): boolean | undefined {
        return this['has_permission'];
    }
    public withIsProtect(isProtect: boolean): UserRefPermissionBasicDto {
        this['is_protect'] = isProtect;
        return this;
    }
    public set isProtect(isProtect: boolean  | undefined) {
        this['is_protect'] = isProtect;
    }
    public get isProtect(): boolean | undefined {
        return this['is_protect'];
    }
}