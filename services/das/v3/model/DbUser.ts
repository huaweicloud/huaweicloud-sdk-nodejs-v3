

export class DbUser {
    private 'db_user_id'?: string;
    private 'db_username'?: string;
    public constructor(dbUserId?: string, dbUsername?: string) { 
        this['db_user_id'] = dbUserId;
        this['db_username'] = dbUsername;
    }
    public withDbUserId(dbUserId: string): DbUser {
        this['db_user_id'] = dbUserId;
        return this;
    }
    public set dbUserId(dbUserId: string  | undefined) {
        this['db_user_id'] = dbUserId;
    }
    public get dbUserId(): string | undefined {
        return this['db_user_id'];
    }
    public withDbUsername(dbUsername: string): DbUser {
        this['db_username'] = dbUsername;
        return this;
    }
    public set dbUsername(dbUsername: string  | undefined) {
        this['db_username'] = dbUsername;
    }
    public get dbUsername(): string | undefined {
        return this['db_username'];
    }
}