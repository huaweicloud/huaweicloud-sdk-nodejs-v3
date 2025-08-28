

export class GetUsersListdatabase {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): GetUsersListdatabase {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): GetUsersListdatabase {
        this['description'] = description;
        return this;
    }
}