

export class FlavorBrief {
    public flavor?: string;
    public description?: string;
    public constructor() { 
    }
    public withFlavor(flavor: string): FlavorBrief {
        this['flavor'] = flavor;
        return this;
    }
    public withDescription(description: string): FlavorBrief {
        this['description'] = description;
        return this;
    }
}