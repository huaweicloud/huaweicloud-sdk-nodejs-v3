

export class PostgresqlUserForCreation {
    public name?: string;
    public password?: string;
    public comment?: string;
    public constructor(name?: string, password?: string) { 
        this['name'] = name;
        this['password'] = password;
    }
    public withName(name: string): PostgresqlUserForCreation {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): PostgresqlUserForCreation {
        this['password'] = password;
        return this;
    }
    public withComment(comment: string): PostgresqlUserForCreation {
        this['comment'] = comment;
        return this;
    }
}