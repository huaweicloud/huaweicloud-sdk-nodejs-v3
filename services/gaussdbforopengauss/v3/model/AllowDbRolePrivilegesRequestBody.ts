

export class AllowDbRolePrivilegesRequestBody {
    private 'db_name'?: string;
    public user?: object;
    public constructor(dbName?: string, user?: object) { 
        this['db_name'] = dbName;
        this['user'] = user;
    }
    public withDbName(dbName: string): AllowDbRolePrivilegesRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withUser(user: object): AllowDbRolePrivilegesRequestBody {
        this['user'] = user;
        return this;
    }
}