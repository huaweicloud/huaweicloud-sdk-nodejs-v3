import { ShowCommonSkillResp } from './ShowCommonSkillResp';
import { SkillCategoryEnum } from './SkillCategoryEnum';
import { SkillOwnerTypeEnum } from './SkillOwnerTypeEnum';
import { SkillPackageSummary } from './SkillPackageSummary';
import { SkillSourceEnum } from './SkillSourceEnum';
import { SkillStatusEnum } from './SkillStatusEnum';
import { VisibilityScopeEnum } from './VisibilityScopeEnum';


export class ShowSkillResp {
    public id?: string;
    public slug?: string;
    private 'display_name'?: string;
    private 'alias_name'?: string;
    public description?: string;
    public category?: SkillCategoryEnum;
    public tags?: Array<string>;
    private 'owner_type'?: SkillOwnerTypeEnum;
    private 'visibility_scope'?: VisibilityScopeEnum;
    private 'visible_domain_ids'?: Array<string>;
    public status?: SkillStatusEnum;
    private 'current_package_id'?: string;
    public cover?: string;
    public source?: SkillSourceEnum;
    private 'support_os_types'?: Array<string>;
    public packages?: Array<SkillPackageSummary>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'attach_instance_number'?: number;
    public constructor() { 
    }
    public withId(id: string): ShowSkillResp {
        this['id'] = id;
        return this;
    }
    public withSlug(slug: string): ShowSkillResp {
        this['slug'] = slug;
        return this;
    }
    public withDisplayName(displayName: string): ShowSkillResp {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withAliasName(aliasName: string): ShowSkillResp {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string  | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName(): string | undefined {
        return this['alias_name'];
    }
    public withDescription(description: string): ShowSkillResp {
        this['description'] = description;
        return this;
    }
    public withCategory(category: SkillCategoryEnum): ShowSkillResp {
        this['category'] = category;
        return this;
    }
    public withTags(tags: Array<string>): ShowSkillResp {
        this['tags'] = tags;
        return this;
    }
    public withOwnerType(ownerType: SkillOwnerTypeEnum): ShowSkillResp {
        this['owner_type'] = ownerType;
        return this;
    }
    public set ownerType(ownerType: SkillOwnerTypeEnum  | undefined) {
        this['owner_type'] = ownerType;
    }
    public get ownerType(): SkillOwnerTypeEnum | undefined {
        return this['owner_type'];
    }
    public withVisibilityScope(visibilityScope: VisibilityScopeEnum): ShowSkillResp {
        this['visibility_scope'] = visibilityScope;
        return this;
    }
    public set visibilityScope(visibilityScope: VisibilityScopeEnum  | undefined) {
        this['visibility_scope'] = visibilityScope;
    }
    public get visibilityScope(): VisibilityScopeEnum | undefined {
        return this['visibility_scope'];
    }
    public withVisibleDomainIds(visibleDomainIds: Array<string>): ShowSkillResp {
        this['visible_domain_ids'] = visibleDomainIds;
        return this;
    }
    public set visibleDomainIds(visibleDomainIds: Array<string>  | undefined) {
        this['visible_domain_ids'] = visibleDomainIds;
    }
    public get visibleDomainIds(): Array<string> | undefined {
        return this['visible_domain_ids'];
    }
    public withStatus(status: SkillStatusEnum): ShowSkillResp {
        this['status'] = status;
        return this;
    }
    public withCurrentPackageId(currentPackageId: string): ShowSkillResp {
        this['current_package_id'] = currentPackageId;
        return this;
    }
    public set currentPackageId(currentPackageId: string  | undefined) {
        this['current_package_id'] = currentPackageId;
    }
    public get currentPackageId(): string | undefined {
        return this['current_package_id'];
    }
    public withCover(cover: string): ShowSkillResp {
        this['cover'] = cover;
        return this;
    }
    public withSource(source: SkillSourceEnum): ShowSkillResp {
        this['source'] = source;
        return this;
    }
    public withSupportOsTypes(supportOsTypes: Array<string>): ShowSkillResp {
        this['support_os_types'] = supportOsTypes;
        return this;
    }
    public set supportOsTypes(supportOsTypes: Array<string>  | undefined) {
        this['support_os_types'] = supportOsTypes;
    }
    public get supportOsTypes(): Array<string> | undefined {
        return this['support_os_types'];
    }
    public withPackages(packages: Array<SkillPackageSummary>): ShowSkillResp {
        this['packages'] = packages;
        return this;
    }
    public withCreateTime(createTime: string): ShowSkillResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowSkillResp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withAttachInstanceNumber(attachInstanceNumber: number): ShowSkillResp {
        this['attach_instance_number'] = attachInstanceNumber;
        return this;
    }
    public set attachInstanceNumber(attachInstanceNumber: number  | undefined) {
        this['attach_instance_number'] = attachInstanceNumber;
    }
    public get attachInstanceNumber(): number | undefined {
        return this['attach_instance_number'];
    }
}