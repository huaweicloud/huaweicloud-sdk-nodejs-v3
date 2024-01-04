

export class Flavor {
    private 'flavor_name'?: string;
    public constructor() { 
    }
    public withFlavorName(flavorName: string): Flavor {
        this['flavor_name'] = flavorName;
        return this;
    }
    public set flavorName(flavorName: string  | undefined) {
        this['flavor_name'] = flavorName;
    }
    public get flavorName(): string | undefined {
        return this['flavor_name'];
    }
}