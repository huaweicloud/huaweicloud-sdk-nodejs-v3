

export class Scene {
    public id?: string;
    public name?: string;
    public steps?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): Scene {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Scene {
        this['name'] = name;
        return this;
    }
    public withSteps(steps: Array<string>): Scene {
        this['steps'] = steps;
        return this;
    }
}