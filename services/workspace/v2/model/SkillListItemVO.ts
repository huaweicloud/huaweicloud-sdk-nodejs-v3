import { SkillCategoryEnum } from './SkillCategoryEnum';
import { SkillSourceEnum } from './SkillSourceEnum';
import { SkillStatusEnum } from './SkillStatusEnum';
import { VisibilityScopeEnum } from './VisibilityScopeEnum';


export class SkillListItemVO {
    public id?: string;
    public slug?: string;
    private 'display_name'?: string;
    private 'alias_name'?: string;
    public category?: SkillCategoryEnum;
    public description?: string;
    public tags?: Array<string>;
    public status?: SkillStatusEnum;
    private 'visibility_scope'?: VisibilityScopeEnum;
    private 'current_package_id'?: string;
    private 'current_version'?: string;
    private 'current_revision'?: number;
    public cover?: string;
    public source?: SkillSourceEnum;
    private 'support_os_types'?: Array<string>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'attach_instance_number'?: number;
    public constructor() { 
    }
    public withId(id: string): SkillListItemVO {
        this['id'] = id;
        return this;
    }
    public withSlug(slug: string): SkillListItemVO {
        this['slug'] = slug;
        return this;
    }
    public withDisplayName(displayName: string): SkillListItemVO {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withAliasName(aliasName: string): SkillListItemVO {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string  | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName(): string | undefined {
        return this['alias_name'];
    }
    public withCategory(category: SkillCategoryEnum): SkillListItemVO {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): SkillListItemVO {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<string>): SkillListItemVO {
        this['tags'] = tags;
        return this;
    }
    public withStatus(status: SkillStatusEnum): SkillListItemVO {
        this['status'] = status;
        return this;
    }
    public withVisibilityScope(visibilityScope: VisibilityScopeEnum): SkillListItemVO {
        this['visibility_scope'] = visibilityScope;
        return this;
    }
    public set visibilityScope(visibilityScope: VisibilityScopeEnum  | undefined) {
        this['visibility_scope'] = visibilityScope;
    }
    public get visibilityScope(): VisibilityScopeEnum | undefined {
        return this['visibility_scope'];
    }
    public withCurrentPackageId(currentPackageId: string): SkillListItemVO {
        this['current_package_id'] = currentPackageId;
        return this;
    }
    public set currentPackageId(currentPackageId: string  | undefined) {
        this['current_package_id'] = currentPackageId;
    }
    public get currentPackageId(): string | undefined {
        return this['current_package_id'];
    }
    public withCurrentVersion(currentVersion: string): SkillListItemVO {
        this['current_version'] = currentVersion;
        return this;
    }
    public set currentVersion(currentVersion: string  | undefined) {
        this['current_version'] = currentVersion;
    }
    public get currentVersion(): string | undefined {
        return this['current_version'];
    }
    public withCurrentRevision(currentRevision: number): SkillListItemVO {
        this['current_revision'] = currentRevision;
        return this;
    }
    public set currentRevision(currentRevision: number  | undefined) {
        this['current_revision'] = currentRevision;
    }
    public get currentRevision(): number | undefined {
        return this['current_revision'];
    }
    public withCover(cover: string): SkillListItemVO {
        this['cover'] = cover;
        return this;
    }
    public withSource(source: SkillSourceEnum): SkillListItemVO {
        this['source'] = source;
        return this;
    }
    public withSupportOsTypes(supportOsTypes: Array<string>): SkillListItemVO {
        this['support_os_types'] = supportOsTypes;
        return this;
    }
    public set supportOsTypes(supportOsTypes: Array<string>  | undefined) {
        this['support_os_types'] = supportOsTypes;
    }
    public get supportOsTypes(): Array<string> | undefined {
        return this['support_os_types'];
    }
    public withCreateTime(createTime: string): SkillListItemVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): SkillListItemVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withAttachInstanceNumber(attachInstanceNumber: number): SkillListItemVO {
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