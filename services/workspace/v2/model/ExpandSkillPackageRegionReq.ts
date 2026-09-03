import { PackageRegionWithStatusInfo } from './PackageRegionWithStatusInfo';


export class ExpandSkillPackageRegionReq {
    public regions?: Array<PackageRegionWithStatusInfo>;
    public constructor(regions?: Array<PackageRegionWithStatusInfo>) { 
        this['regions'] = regions;
    }
    public withRegions(regions: Array<PackageRegionWithStatusInfo>): ExpandSkillPackageRegionReq {
        this['regions'] = regions;
        return this;
    }
}