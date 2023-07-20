import { SqlserverUserWithPrivilege } from './SqlserverUserWithPrivilege';


export class SqlserverRevokeRequest {
    private 'db_name'?: string;
    public users?: Array<SqlserverUserWithPrivilege>;
    public constructor(dbName?: string, users?: Array<SqlserverUserWithPrivilege>) { 
        this['db_name'] = dbName;
        this['users'] = users;
    }
    public withDbName(dbName: string): SqlserverRevokeRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withUsers(users: Array<SqlserverUserWithPrivilege>): SqlserverRevokeRequest {
        this['users'] = users;
        return this;
    }
}