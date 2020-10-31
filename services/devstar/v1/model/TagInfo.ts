

export class TagInfo {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): TagInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TagInfo {
        this['name'] = name;
        return this;
    }
}