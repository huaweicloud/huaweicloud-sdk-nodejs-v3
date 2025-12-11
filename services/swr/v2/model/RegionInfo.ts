

export class RegionInfo {
    public regionID?: string;
    public constructor(regionID?: string) { 
        this['regionID'] = regionID;
    }
    public withRegionID(regionID: string): RegionInfo {
        this['regionID'] = regionID;
        return this;
    }
}