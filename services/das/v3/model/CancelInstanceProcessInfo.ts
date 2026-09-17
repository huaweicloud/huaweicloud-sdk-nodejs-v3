

export class CancelInstanceProcessInfo {
    public id?: number;
    public user?: string;
    public constructor(id?: number, user?: string) { 
        this['id'] = id;
        this['user'] = user;
    }
    public withId(id: number): CancelInstanceProcessInfo {
        this['id'] = id;
        return this;
    }
    public withUser(user: string): CancelInstanceProcessInfo {
        this['user'] = user;
        return this;
    }
}