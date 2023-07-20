

export class UpdateDatabaseUserComment {
    public name?: string;
    public host?: string;
    public comment?: string;
    public constructor(name?: string, host?: string, comment?: string) { 
        this['name'] = name;
        this['host'] = host;
        this['comment'] = comment;
    }
    public withName(name: string): UpdateDatabaseUserComment {
        this['name'] = name;
        return this;
    }
    public withHost(host: string): UpdateDatabaseUserComment {
        this['host'] = host;
        return this;
    }
    public withComment(comment: string): UpdateDatabaseUserComment {
        this['comment'] = comment;
        return this;
    }
}