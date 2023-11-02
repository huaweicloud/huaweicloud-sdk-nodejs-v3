

export class EntityPrivilegeInfo {
    public privileges?: Array<string>;
    private 'inherit_privileges'?: Array<string>;
    public constructor() { 
    }
    public withPrivileges(privileges: Array<string>): EntityPrivilegeInfo {
        this['privileges'] = privileges;
        return this;
    }
    public withInheritPrivileges(inheritPrivileges: Array<string>): EntityPrivilegeInfo {
        this['inherit_privileges'] = inheritPrivileges;
        return this;
    }
    public set inheritPrivileges(inheritPrivileges: Array<string>  | undefined) {
        this['inherit_privileges'] = inheritPrivileges;
    }
    public get inheritPrivileges(): Array<string> | undefined {
        return this['inherit_privileges'];
    }
}