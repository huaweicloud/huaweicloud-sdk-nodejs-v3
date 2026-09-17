

export class StoryPoint {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): StoryPoint {
        this['id'] = id;
        return this;
    }
    public withName(name: string): StoryPoint {
        this['name'] = name;
        return this;
    }
}