import { PackageStatusEnum } from './PackageStatusEnum';
import { SkillPackageRegionItem } from './SkillPackageRegionItem';


export class ShowSkillPackageResp {
    public id?: string;
    private 'skill_id'?: string;
    public version?: string;
    public revision?: number;
    private 'package_hash'?: string;
    private 'package_size'?: number;
    private 'package_status'?: PackageStatusEnum;
    private 'uploaded_by'?: string;
    private 'uploaded_role'?: string;
    public regions?: Array<SkillPackageRegionItem>;
    public remark?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: string): ShowSkillPackageResp {
        this['id'] = id;
        return this;
    }
    public withSkillId(skillId: string): ShowSkillPackageResp {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withVersion(version: string): ShowSkillPackageResp {
        this['version'] = version;
        return this;
    }
    public withRevision(revision: number): ShowSkillPackageResp {
        this['revision'] = revision;
        return this;
    }
    public withPackageHash(packageHash: string): ShowSkillPackageResp {
        this['package_hash'] = packageHash;
        return this;
    }
    public set packageHash(packageHash: string  | undefined) {
        this['package_hash'] = packageHash;
    }
    public get packageHash(): string | undefined {
        return this['package_hash'];
    }
    public withPackageSize(packageSize: number): ShowSkillPackageResp {
        this['package_size'] = packageSize;
        return this;
    }
    public set packageSize(packageSize: number  | undefined) {
        this['package_size'] = packageSize;
    }
    public get packageSize(): number | undefined {
        return this['package_size'];
    }
    public withPackageStatus(packageStatus: PackageStatusEnum): ShowSkillPackageResp {
        this['package_status'] = packageStatus;
        return this;
    }
    public set packageStatus(packageStatus: PackageStatusEnum  | undefined) {
        this['package_status'] = packageStatus;
    }
    public get packageStatus(): PackageStatusEnum | undefined {
        return this['package_status'];
    }
    public withUploadedBy(uploadedBy: string): ShowSkillPackageResp {
        this['uploaded_by'] = uploadedBy;
        return this;
    }
    public set uploadedBy(uploadedBy: string  | undefined) {
        this['uploaded_by'] = uploadedBy;
    }
    public get uploadedBy(): string | undefined {
        return this['uploaded_by'];
    }
    public withUploadedRole(uploadedRole: string): ShowSkillPackageResp {
        this['uploaded_role'] = uploadedRole;
        return this;
    }
    public set uploadedRole(uploadedRole: string  | undefined) {
        this['uploaded_role'] = uploadedRole;
    }
    public get uploadedRole(): string | undefined {
        return this['uploaded_role'];
    }
    public withRegions(regions: Array<SkillPackageRegionItem>): ShowSkillPackageResp {
        this['regions'] = regions;
        return this;
    }
    public withRemark(remark: string): ShowSkillPackageResp {
        this['remark'] = remark;
        return this;
    }
    public withCreateTime(createTime: string): ShowSkillPackageResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowSkillPackageResp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}