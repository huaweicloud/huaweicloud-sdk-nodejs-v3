

export class UserSafeDto {
    public id?: number;
    public name?: string;
    public username?: string;
    public constructor() { 
    }
    public withId(id: number): UserSafeDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UserSafeDto {
        this['name'] = name;
        return this;
    }
    public withUsername(username: string): UserSafeDto {
        this['username'] = username;
        return this;
    }
}