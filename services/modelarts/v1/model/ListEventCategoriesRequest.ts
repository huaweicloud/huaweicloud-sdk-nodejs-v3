

export class ListEventCategoriesRequest {
    private 'flavor_type'?: string;
    public constructor() { 
    }
    public withFlavorType(flavorType: string): ListEventCategoriesRequest {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
}