

export class UserRoleVO {
    public role: string;
    public comment?: string;
    private 'is_transfer': boolean | undefined;
    public privileges: string;
    private 'inherits_roles'?: Array<string> | undefined;
    public selected?: boolean;
    public constructor(role?: any, isTransfer?: any, privileges?: any) { 
        this['role'] = role;
        this['is_transfer'] = isTransfer;
        this['privileges'] = privileges;
    }
    public withRole(role: string): UserRoleVO {
        this['role'] = role;
        return this;
    }
    public withComment(comment: string): UserRoleVO {
        this['comment'] = comment;
        return this;
    }
    public withIsTransfer(isTransfer: boolean): UserRoleVO {
        this['is_transfer'] = isTransfer;
        return this;
    }
    public set isTransfer(isTransfer: boolean | undefined) {
        this['is_transfer'] = isTransfer;
    }
    public get isTransfer() {
        return this['is_transfer'];
    }
    public withPrivileges(privileges: string): UserRoleVO {
        this['privileges'] = privileges;
        return this;
    }
    public withInheritsRoles(inheritsRoles: Array<string>): UserRoleVO {
        this['inherits_roles'] = inheritsRoles;
        return this;
    }
    public set inheritsRoles(inheritsRoles: Array<string> | undefined) {
        this['inherits_roles'] = inheritsRoles;
    }
    public get inheritsRoles() {
        return this['inherits_roles'];
    }
    public withSelected(selected: boolean): UserRoleVO {
        this['selected'] = selected;
        return this;
    }
}