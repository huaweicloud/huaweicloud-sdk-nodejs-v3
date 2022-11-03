

export class AreaRegion {
    public area?: string;
    public regions?: Array<string>;
    public constructor() { 
    }
    public withArea(area: string): AreaRegion {
        this['area'] = area;
        return this;
    }
    public withRegions(regions: Array<string>): AreaRegion {
        this['regions'] = regions;
        return this;
    }
}