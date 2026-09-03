import { PackageStatusEnum } from './PackageStatusEnum';


export class SkillPackageSummary {
    public id?: string;
    public version?: string;
    public revision?: number;
    private 'package_status'?: PackageStatusEnum;
    public regions?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): SkillPackageSummary {
        this['id'] = id;
        return this;
    }
    public withVersion(version: string): SkillPackageSummary {
        this['version'] = version;
        return this;
    }
    public withRevision(revision: number): SkillPackageSummary {
        this['revision'] = revision;
        return this;
    }
    public withPackageStatus(packageStatus: PackageStatusEnum): SkillPackageSummary {
        this['package_status'] = packageStatus;
        return this;
    }
    public set packageStatus(packageStatus: PackageStatusEnum  | undefined) {
        this['package_status'] = packageStatus;
    }
    public get packageStatus(): PackageStatusEnum | undefined {
        return this['package_status'];
    }
    public withRegions(regions: Array<string>): SkillPackageSummary {
        this['regions'] = regions;
        return this;
    }
}