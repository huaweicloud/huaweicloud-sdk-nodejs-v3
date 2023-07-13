

export class ExtendProductSupportFeaturesEntity {
    public name?: string;
    public properties?: { [key: string]: string; };
    public constructor() { 
    }
    public withName(name: string): ExtendProductSupportFeaturesEntity {
        this['name'] = name;
        return this;
    }
    public withProperties(properties: { [key: string]: string; }): ExtendProductSupportFeaturesEntity {
        this['properties'] = properties;
        return this;
    }
}