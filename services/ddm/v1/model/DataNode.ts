

export class DataNode {
    public id?: string;
    public user?: string;
    public password?: string;
    public constructor(id?: string, user?: string, password?: string) { 
        this['id'] = id;
        this['user'] = user;
        this['password'] = password;
    }
    public withId(id: string): DataNode {
        this['id'] = id;
        return this;
    }
    public withUser(user: string): DataNode {
        this['user'] = user;
        return this;
    }
    public withPassword(password: string): DataNode {
        this['password'] = password;
        return this;
    }
}