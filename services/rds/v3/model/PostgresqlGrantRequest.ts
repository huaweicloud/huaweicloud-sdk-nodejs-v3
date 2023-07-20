import { PostgresqlUserWithPrivilege } from './PostgresqlUserWithPrivilege';


export class PostgresqlGrantRequest {
    private 'db_name'?: string;
    public users?: Array<PostgresqlUserWithPrivilege>;
    public constructor(dbName?: string, users?: Array<PostgresqlUserWithPrivilege>) { 
        this['db_name'] = dbName;
        this['users'] = users;
    }
    public withDbName(dbName: string): PostgresqlGrantRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withUsers(users: Array<PostgresqlUserWithPrivilege>): PostgresqlGrantRequest {
        this['users'] = users;
        return this;
    }
}