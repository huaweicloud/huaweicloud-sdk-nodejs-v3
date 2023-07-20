

export class ModifyProxyWeightReadonlyNode {
    public id?: string;
    public weight?: number;
    public constructor() { 
    }
    public withId(id: string): ModifyProxyWeightReadonlyNode {
        this['id'] = id;
        return this;
    }
    public withWeight(weight: number): ModifyProxyWeightReadonlyNode {
        this['weight'] = weight;
        return this;
    }
}