

export class RegisterDbUserRequestBody {
    private 'db_username'?: string;
    private 'db_user_password'?: string;
    private 'datastore_type'?: string;
    public constructor(dbUsername?: string, dbUserPassword?: string, datastoreType?: string) { 
        this['db_username'] = dbUsername;
        this['db_user_password'] = dbUserPassword;
        this['datastore_type'] = datastoreType;
    }
    public withDbUsername(dbUsername: string): RegisterDbUserRequestBody {
        this['db_username'] = dbUsername;
        return this;
    }
    public set dbUsername(dbUsername: string  | undefined) {
        this['db_username'] = dbUsername;
    }
    public get dbUsername(): string | undefined {
        return this['db_username'];
    }
    public withDbUserPassword(dbUserPassword: string): RegisterDbUserRequestBody {
        this['db_user_password'] = dbUserPassword;
        return this;
    }
    public set dbUserPassword(dbUserPassword: string  | undefined) {
        this['db_user_password'] = dbUserPassword;
    }
    public get dbUserPassword(): string | undefined {
        return this['db_user_password'];
    }
    public withDatastoreType(datastoreType: string): RegisterDbUserRequestBody {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
}