import { RolesOption } from './RolesOption';


export class CreateDatabaseRoleRequestBody {
    private 'role_name'?: string;
    private 'db_name'?: string;
    public roles?: Array<RolesOption>;
    public constructor(roleName?: string) { 
        this['role_name'] = roleName;
    }
    public withRoleName(roleName: string): CreateDatabaseRoleRequestBody {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withDbName(dbName: string): CreateDatabaseRoleRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withRoles(roles: Array<RolesOption>): CreateDatabaseRoleRequestBody {
        this['roles'] = roles;
        return this;
    }
}