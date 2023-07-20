import { UserWithPrivilege } from './UserWithPrivilege';


export class GrantRequest {
    private 'db_name'?: string;
    public users?: Array<UserWithPrivilege>;
    public constructor(dbName?: string, users?: Array<UserWithPrivilege>) { 
        this['db_name'] = dbName;
        this['users'] = users;
    }
    public withDbName(dbName: string): GrantRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withUsers(users: Array<UserWithPrivilege>): GrantRequest {
        this['users'] = users;
        return this;
    }
}