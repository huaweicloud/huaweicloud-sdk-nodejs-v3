

export class ListDeleteDatabaseUserRequest {
    public name?: string;
    public host?: string;
    public constructor(name?: string, host?: string) { 
        this['name'] = name;
        this['host'] = host;
    }
    public withName(name: string): ListDeleteDatabaseUserRequest {
        this['name'] = name;
        return this;
    }
    public withHost(host: string): ListDeleteDatabaseUserRequest {
        this['host'] = host;
        return this;
    }
}