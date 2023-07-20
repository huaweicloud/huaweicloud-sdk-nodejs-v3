

export class NodesWeight {
    public id?: string;
    public weight?: number;
    public constructor() { 
    }
    public withId(id: string): NodesWeight {
        this['id'] = id;
        return this;
    }
    public withWeight(weight: number): NodesWeight {
        this['weight'] = weight;
        return this;
    }
}