

export class PersonalEventAuthorDto {
    public id?: number;
    public username?: string;
    public constructor() { 
    }
    public withId(id: number): PersonalEventAuthorDto {
        this['id'] = id;
        return this;
    }
    public withUsername(username: string): PersonalEventAuthorDto {
        this['username'] = username;
        return this;
    }
}