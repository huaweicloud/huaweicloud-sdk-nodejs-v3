

export class QueryRoleDetailResp {
    public role?: string;
    public comment?: string;
    private 'is_transfer'?: boolean | undefined;
    public privileges?: string;
    private 'inherits_roles'?: Array<string> | undefined;
    public selected?: boolean;
    public constructor() { 
    }
    public withRole(role: string): QueryRoleDetailResp {
        this['role'] = role;
        return this;
    }
    public withComment(comment: string): QueryRoleDetailResp {
        this['comment'] = comment;
        return this;
    }
    public withIsTransfer(isTransfer: boolean): QueryRoleDetailResp {
        this['is_transfer'] = isTransfer;
        return this;
    }
    public set isTransfer(isTransfer: boolean | undefined) {
        this['is_transfer'] = isTransfer;
    }
    public get isTransfer() {
        return this['is_transfer'];
    }
    public withPrivileges(privileges: string): QueryRoleDetailResp {
        this['privileges'] = privileges;
        return this;
    }
    public withInheritsRoles(inheritsRoles: Array<string>): QueryRoleDetailResp {
        this['inherits_roles'] = inheritsRoles;
        return this;
    }
    public set inheritsRoles(inheritsRoles: Array<string> | undefined) {
        this['inherits_roles'] = inheritsRoles;
    }
    public get inheritsRoles() {
        return this['inherits_roles'];
    }
    public withSelected(selected: boolean): QueryRoleDetailResp {
        this['selected'] = selected;
        return this;
    }
}