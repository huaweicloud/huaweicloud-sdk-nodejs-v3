

export class ListDatabaseRolesRequest {
    private 'instance_id'?: string;
    private 'role_name'?: string;
    private 'db_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListDatabaseRolesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRoleName(roleName: string): ListDatabaseRolesRequest {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withDbName(dbName: string): ListDatabaseRolesRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withOffset(offset: number): ListDatabaseRolesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDatabaseRolesRequest {
        this['limit'] = limit;
        return this;
    }
}