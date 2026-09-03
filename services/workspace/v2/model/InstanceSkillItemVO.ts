import { InstallStatusEnum } from './InstallStatusEnum';
import { SkillOwnerTypeEnum } from './SkillOwnerTypeEnum';


export class InstanceSkillItemVO {
    private 'skill_id'?: string;
    private 'display_name'?: string;
    public slug?: string;
    private 'alias_name'?: string;
    public description?: string;
    private 'owner_type'?: SkillOwnerTypeEnum;
    private 'install_status'?: InstallStatusEnum;
    private 'package_id'?: string;
    public version?: string;
    private 'installed_at'?: string;
    public cover?: string;
    public constructor() { 
    }
    public withSkillId(skillId: string): InstanceSkillItemVO {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withDisplayName(displayName: string): InstanceSkillItemVO {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withSlug(slug: string): InstanceSkillItemVO {
        this['slug'] = slug;
        return this;
    }
    public withAliasName(aliasName: string): InstanceSkillItemVO {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string  | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName(): string | undefined {
        return this['alias_name'];
    }
    public withDescription(description: string): InstanceSkillItemVO {
        this['description'] = description;
        return this;
    }
    public withOwnerType(ownerType: SkillOwnerTypeEnum): InstanceSkillItemVO {
        this['owner_type'] = ownerType;
        return this;
    }
    public set ownerType(ownerType: SkillOwnerTypeEnum  | undefined) {
        this['owner_type'] = ownerType;
    }
    public get ownerType(): SkillOwnerTypeEnum | undefined {
        return this['owner_type'];
    }
    public withInstallStatus(installStatus: InstallStatusEnum): InstanceSkillItemVO {
        this['install_status'] = installStatus;
        return this;
    }
    public set installStatus(installStatus: InstallStatusEnum  | undefined) {
        this['install_status'] = installStatus;
    }
    public get installStatus(): InstallStatusEnum | undefined {
        return this['install_status'];
    }
    public withPackageId(packageId: string): InstanceSkillItemVO {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withVersion(version: string): InstanceSkillItemVO {
        this['version'] = version;
        return this;
    }
    public withInstalledAt(installedAt: string): InstanceSkillItemVO {
        this['installed_at'] = installedAt;
        return this;
    }
    public set installedAt(installedAt: string  | undefined) {
        this['installed_at'] = installedAt;
    }
    public get installedAt(): string | undefined {
        return this['installed_at'];
    }
    public withCover(cover: string): InstanceSkillItemVO {
        this['cover'] = cover;
        return this;
    }
}