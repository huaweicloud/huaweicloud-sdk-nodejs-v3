

export class DeleteDatabaseRoleRequestBody {
    private 'role_name'?: string;
    private 'db_name'?: string;
    public constructor(roleName?: string, dbName?: string) { 
        this['role_name'] = roleName;
        this['db_name'] = dbName;
    }
    public withRoleName(roleName: string): DeleteDatabaseRoleRequestBody {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withDbName(dbName: string): DeleteDatabaseRoleRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
}