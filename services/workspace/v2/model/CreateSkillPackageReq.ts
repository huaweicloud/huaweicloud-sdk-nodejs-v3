import { PackageRegionWithStatusInfo } from './PackageRegionWithStatusInfo';


export class CreateSkillPackageReq {
    public version?: string;
    private 'package_name'?: string;
    private 'package_hash'?: string;
    private 'package_size'?: number;
    public regions?: Array<PackageRegionWithStatusInfo>;
    public remark?: string;
    public constructor(version?: string, packageName?: string, packageHash?: string, packageSize?: number, regions?: Array<PackageRegionWithStatusInfo>) { 
        this['version'] = version;
        this['package_name'] = packageName;
        this['package_hash'] = packageHash;
        this['package_size'] = packageSize;
        this['regions'] = regions;
    }
    public withVersion(version: string): CreateSkillPackageReq {
        this['version'] = version;
        return this;
    }
    public withPackageName(packageName: string): CreateSkillPackageReq {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withPackageHash(packageHash: string): CreateSkillPackageReq {
        this['package_hash'] = packageHash;
        return this;
    }
    public set packageHash(packageHash: string  | undefined) {
        this['package_hash'] = packageHash;
    }
    public get packageHash(): string | undefined {
        return this['package_hash'];
    }
    public withPackageSize(packageSize: number): CreateSkillPackageReq {
        this['package_size'] = packageSize;
        return this;
    }
    public set packageSize(packageSize: number  | undefined) {
        this['package_size'] = packageSize;
    }
    public get packageSize(): number | undefined {
        return this['package_size'];
    }
    public withRegions(regions: Array<PackageRegionWithStatusInfo>): CreateSkillPackageReq {
        this['regions'] = regions;
        return this;
    }
    public withRemark(remark: string): CreateSkillPackageReq {
        this['remark'] = remark;
        return this;
    }
}