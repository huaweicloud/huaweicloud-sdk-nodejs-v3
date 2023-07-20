

export class Cluster {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): Cluster {
        this['id'] = id;
        return this;
    }
}