

export class ClusterTask {
    public description?: string;
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withDescription(description: string): ClusterTask {
        this['description'] = description;
        return this;
    }
    public withId(id: string): ClusterTask {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ClusterTask {
        this['name'] = name;
        return this;
    }
}