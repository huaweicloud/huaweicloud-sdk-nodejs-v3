

export class ProxyReadonlyInstances {
    public id?: string;
    public weight?: number;
    public constructor(id?: string, weight?: number) { 
        this['id'] = id;
        this['weight'] = weight;
    }
    public withId(id: string): ProxyReadonlyInstances {
        this['id'] = id;
        return this;
    }
    public withWeight(weight: number): ProxyReadonlyInstances {
        this['weight'] = weight;
        return this;
    }
}