import { RolesOption } from './RolesOption';


export class CreateDatabaseUserRequestBody {
    private 'user_name'?: string;
    private 'user_pwd'?: string;
    private 'db_name'?: string;
    public roles?: Array<RolesOption>;
    public constructor(userName?: string, userPwd?: string, roles?: Array<RolesOption>) { 
        this['user_name'] = userName;
        this['user_pwd'] = userPwd;
        this['roles'] = roles;
    }
    public withUserName(userName: string): CreateDatabaseUserRequestBody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserPwd(userPwd: string): CreateDatabaseUserRequestBody {
        this['user_pwd'] = userPwd;
        return this;
    }
    public set userPwd(userPwd: string  | undefined) {
        this['user_pwd'] = userPwd;
    }
    public get userPwd(): string | undefined {
        return this['user_pwd'];
    }
    public withDbName(dbName: string): CreateDatabaseUserRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withRoles(roles: Array<RolesOption>): CreateDatabaseUserRequestBody {
        this['roles'] = roles;
        return this;
    }
}