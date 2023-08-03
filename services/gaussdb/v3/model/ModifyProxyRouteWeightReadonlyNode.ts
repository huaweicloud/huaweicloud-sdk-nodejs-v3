

export class ModifyProxyRouteWeightReadonlyNode {
    public id?: string;
    public weight?: number;
    public constructor(id?: string, weight?: number) { 
        this['id'] = id;
        this['weight'] = weight;
    }
    public withId(id: string): ModifyProxyRouteWeightReadonlyNode {
        this['id'] = id;
        return this;
    }
    public withWeight(weight: number): ModifyProxyRouteWeightReadonlyNode {
        this['weight'] = weight;
        return this;
    }
}