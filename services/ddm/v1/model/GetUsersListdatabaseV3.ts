

export class GetUsersListdatabaseV3 {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): GetUsersListdatabaseV3 {
        this['name'] = name;
        return this;
    }
}