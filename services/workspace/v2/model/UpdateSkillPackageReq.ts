import { PackageStatusEnum } from './PackageStatusEnum';


export class UpdateSkillPackageReq {
    private 'package_status'?: PackageStatusEnum;
    public remark?: string;
    public constructor() { 
    }
    public withPackageStatus(packageStatus: PackageStatusEnum): UpdateSkillPackageReq {
        this['package_status'] = packageStatus;
        return this;
    }
    public set packageStatus(packageStatus: PackageStatusEnum  | undefined) {
        this['package_status'] = packageStatus;
    }
    public get packageStatus(): PackageStatusEnum | undefined {
        return this['package_status'];
    }
    public withRemark(remark: string): UpdateSkillPackageReq {
        this['remark'] = remark;
        return this;
    }
}