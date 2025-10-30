

export class ComputeSpec {
    private 'flavor_type'?: string;
    public count?: number;
    public constructor(flavorType?: string, count?: number) { 
        this['flavor_type'] = flavorType;
        this['count'] = count;
    }
    public withFlavorType(flavorType: string): ComputeSpec {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withCount(count: number): ComputeSpec {
        this['count'] = count;
        return this;
    }
}