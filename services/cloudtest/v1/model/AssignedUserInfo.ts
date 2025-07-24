

export class AssignedUserInfo {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): AssignedUserInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AssignedUserInfo {
        this['name'] = name;
        return this;
    }
}