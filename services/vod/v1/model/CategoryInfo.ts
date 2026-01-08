

export class CategoryInfo {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): CategoryInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CategoryInfo {
        this['name'] = name;
        return this;
    }
}