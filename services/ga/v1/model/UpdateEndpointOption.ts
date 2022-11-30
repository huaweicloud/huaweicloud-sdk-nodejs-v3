

export class UpdateEndpointOption {
    public weight?: number;
    public constructor() { 
    }
    public withWeight(weight: number): UpdateEndpointOption {
        this['weight'] = weight;
        return this;
    }
}