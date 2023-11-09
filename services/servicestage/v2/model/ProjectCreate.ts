

export class ProjectCreate {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ProjectCreate {
        this['name'] = name;
        return this;
    }
}