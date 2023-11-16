import { RevokePostgresqlDbPrivilegeUser } from './RevokePostgresqlDbPrivilegeUser';


export class RevokePostgresqlDbPrivilegeRequestBody {
    private 'db_name'?: string;
    public users?: Array<RevokePostgresqlDbPrivilegeUser>;
    public constructor(dbName?: string, users?: Array<RevokePostgresqlDbPrivilegeUser>) { 
        this['db_name'] = dbName;
        this['users'] = users;
    }
    public withDbName(dbName: string): RevokePostgresqlDbPrivilegeRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withUsers(users: Array<RevokePostgresqlDbPrivilegeUser>): RevokePostgresqlDbPrivilegeRequestBody {
        this['users'] = users;
        return this;
    }
}