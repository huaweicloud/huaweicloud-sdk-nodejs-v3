

export class RemovePackageRegionReq {
    public regions?: Array<string>;
    public constructor(regions?: Array<string>) { 
        this['regions'] = regions;
    }
    public withRegions(regions: Array<string>): RemovePackageRegionReq {
        this['regions'] = regions;
        return this;
    }
}