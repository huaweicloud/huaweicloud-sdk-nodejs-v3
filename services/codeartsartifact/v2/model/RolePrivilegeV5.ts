import { PrivilegeParam } from './PrivilegeParam';


export class RolePrivilegeV5 {
    public privileges?: Array<PrivilegeParam>;
    public constructor(privileges?: Array<PrivilegeParam>) { 
        this['privileges'] = privileges;
    }
    public withPrivileges(privileges: Array<PrivilegeParam>): RolePrivilegeV5 {
        this['privileges'] = privileges;
        return this;
    }
}