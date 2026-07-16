

export class ShowTrainingJobFlavorsRequest {
    private 'flavor_type'?: string;
    public constructor() { 
    }
    public withFlavorType(flavorType: string): ShowTrainingJobFlavorsRequest {
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