

export class ProjectCreatorDto {
    public id?: number;
    public name?: string;
    public username?: string;
    public constructor() { 
    }
    public withId(id: number): ProjectCreatorDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ProjectCreatorDto {
        this['name'] = name;
        return this;
    }
    public withUsername(username: string): ProjectCreatorDto {
        this['username'] = username;
        return this;
    }
}