

export class BlackWhiteListId {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): BlackWhiteListId {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BlackWhiteListId {
        this['name'] = name;
        return this;
    }
}