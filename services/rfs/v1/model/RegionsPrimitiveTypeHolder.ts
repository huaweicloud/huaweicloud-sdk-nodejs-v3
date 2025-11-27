

export class RegionsPrimitiveTypeHolder {
    public regions?: Array<string>;
    public constructor(regions?: Array<string>) { 
        this['regions'] = regions;
    }
    public withRegions(regions: Array<string>): RegionsPrimitiveTypeHolder {
        this['regions'] = regions;
        return this;
    }
}