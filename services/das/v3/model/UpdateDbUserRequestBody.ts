

export class UpdateDbUserRequestBody {
    private 'db_username'?: string;
    private 'db_user_password'?: string;
    public constructor(dbUsername?: string, dbUserPassword?: string) { 
        this['db_username'] = dbUsername;
        this['db_user_password'] = dbUserPassword;
    }
    public withDbUsername(dbUsername: string): UpdateDbUserRequestBody {
        this['db_username'] = dbUsername;
        return this;
    }
    public set dbUsername(dbUsername: string  | undefined) {
        this['db_username'] = dbUsername;
    }
    public get dbUsername(): string | undefined {
        return this['db_username'];
    }
    public withDbUserPassword(dbUserPassword: string): UpdateDbUserRequestBody {
        this['db_user_password'] = dbUserPassword;
        return this;
    }
    public set dbUserPassword(dbUserPassword: string  | undefined) {
        this['db_user_password'] = dbUserPassword;
    }
    public get dbUserPassword(): string | undefined {
        return this['db_user_password'];
    }
}