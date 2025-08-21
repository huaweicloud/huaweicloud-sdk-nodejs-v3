

export class UserTeamBasicDto {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): UserTeamBasicDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UserTeamBasicDto {
        this['name'] = name;
        return this;
    }
}