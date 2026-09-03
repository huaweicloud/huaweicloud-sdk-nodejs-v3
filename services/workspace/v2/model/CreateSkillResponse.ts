import { ShowSkillResp } from './ShowSkillResp';
import { SkillCategoryEnum } from './SkillCategoryEnum';
import { SkillOwnerTypeEnum } from './SkillOwnerTypeEnum';
import { SkillPackageSummary } from './SkillPackageSummary';
import { SkillSourceEnum } from './SkillSourceEnum';
import { SkillStatusEnum } from './SkillStatusEnum';
import { VisibilityScopeEnum } from './VisibilityScopeEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSkillResponse extends SdkResponse {
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
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateSkillResponse {
        this['id'] = id;
        return this;
    }
    public withSlug(slug: string): CreateSkillResponse {
        this['slug'] = slug;
        return this;
    }
    public withDisplayName(displayName: string): CreateSkillResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withAliasName(aliasName: string): CreateSkillResponse {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string  | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName(): string | undefined {
        return this['alias_name'];
    }
    public withDescription(description: string): CreateSkillResponse {
        this['description'] = description;
        return this;
    }
    public withCategory(category: SkillCategoryEnum): CreateSkillResponse {
        this['category'] = category;
        return this;
    }
    public withTags(tags: Array<string>): CreateSkillResponse {
        this['tags'] = tags;
        return this;
    }
    public withOwnerType(ownerType: SkillOwnerTypeEnum): CreateSkillResponse {
        this['owner_type'] = ownerType;
        return this;
    }
    public set ownerType(ownerType: SkillOwnerTypeEnum  | undefined) {
        this['owner_type'] = ownerType;
    }
    public get ownerType(): SkillOwnerTypeEnum | undefined {
        return this['owner_type'];
    }
    public withVisibilityScope(visibilityScope: VisibilityScopeEnum): CreateSkillResponse {
        this['visibility_scope'] = visibilityScope;
        return this;
    }
    public set visibilityScope(visibilityScope: VisibilityScopeEnum  | undefined) {
        this['visibility_scope'] = visibilityScope;
    }
    public get visibilityScope(): VisibilityScopeEnum | undefined {
        return this['visibility_scope'];
    }
    public withVisibleDomainIds(visibleDomainIds: Array<string>): CreateSkillResponse {
        this['visible_domain_ids'] = visibleDomainIds;
        return this;
    }
    public set visibleDomainIds(visibleDomainIds: Array<string>  | undefined) {
        this['visible_domain_ids'] = visibleDomainIds;
    }
    public get visibleDomainIds(): Array<string> | undefined {
        return this['visible_domain_ids'];
    }
    public withStatus(status: SkillStatusEnum): CreateSkillResponse {
        this['status'] = status;
        return this;
    }
    public withCurrentPackageId(currentPackageId: string): CreateSkillResponse {
        this['current_package_id'] = currentPackageId;
        return this;
    }
    public set currentPackageId(currentPackageId: string  | undefined) {
        this['current_package_id'] = currentPackageId;
    }
    public get currentPackageId(): string | undefined {
        return this['current_package_id'];
    }
    public withCover(cover: string): CreateSkillResponse {
        this['cover'] = cover;
        return this;
    }
    public withSource(source: SkillSourceEnum): CreateSkillResponse {
        this['source'] = source;
        return this;
    }
    public withSupportOsTypes(supportOsTypes: Array<string>): CreateSkillResponse {
        this['support_os_types'] = supportOsTypes;
        return this;
    }
    public set supportOsTypes(supportOsTypes: Array<string>  | undefined) {
        this['support_os_types'] = supportOsTypes;
    }
    public get supportOsTypes(): Array<string> | undefined {
        return this['support_os_types'];
    }
    public withPackages(packages: Array<SkillPackageSummary>): CreateSkillResponse {
        this['packages'] = packages;
        return this;
    }
    public withCreateTime(createTime: string): CreateSkillResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateSkillResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withAttachInstanceNumber(attachInstanceNumber: number): CreateSkillResponse {
        this['attach_instance_number'] = attachInstanceNumber;
        return this;
    }
    public set attachInstanceNumber(attachInstanceNumber: number  | undefined) {
        this['attach_instance_number'] = attachInstanceNumber;
    }
    public get attachInstanceNumber(): number | undefined {
        return this['attach_instance_number'];
    }
    public withXRequestId(xRequestId: string): CreateSkillResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}