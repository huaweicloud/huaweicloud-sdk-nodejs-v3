import { CreateSkillPackage } from './CreateSkillPackage';
import { SkillCategoryEnum } from './SkillCategoryEnum';
import { SkillSourceEnum } from './SkillSourceEnum';


export class CreateSkillReq {
    public slug?: string;
    private 'display_name'?: string;
    private 'alias_name'?: string;
    public description?: string;
    public category?: SkillCategoryEnum;
    public tags?: Array<string>;
    public cover?: string;
    public source?: SkillSourceEnum;
    private 'support_os_types'?: Array<string>;
    public packages?: Array<CreateSkillPackage>;
    public constructor(slug?: string, displayName?: string, category?: SkillCategoryEnum) { 
        this['slug'] = slug;
        this['display_name'] = displayName;
        this['category'] = category;
    }
    public withSlug(slug: string): CreateSkillReq {
        this['slug'] = slug;
        return this;
    }
    public withDisplayName(displayName: string): CreateSkillReq {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withAliasName(aliasName: string): CreateSkillReq {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string  | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName(): string | undefined {
        return this['alias_name'];
    }
    public withDescription(description: string): CreateSkillReq {
        this['description'] = description;
        return this;
    }
    public withCategory(category: SkillCategoryEnum): CreateSkillReq {
        this['category'] = category;
        return this;
    }
    public withTags(tags: Array<string>): CreateSkillReq {
        this['tags'] = tags;
        return this;
    }
    public withCover(cover: string): CreateSkillReq {
        this['cover'] = cover;
        return this;
    }
    public withSource(source: SkillSourceEnum): CreateSkillReq {
        this['source'] = source;
        return this;
    }
    public withSupportOsTypes(supportOsTypes: Array<string>): CreateSkillReq {
        this['support_os_types'] = supportOsTypes;
        return this;
    }
    public set supportOsTypes(supportOsTypes: Array<string>  | undefined) {
        this['support_os_types'] = supportOsTypes;
    }
    public get supportOsTypes(): Array<string> | undefined {
        return this['support_os_types'];
    }
    public withPackages(packages: Array<CreateSkillPackage>): CreateSkillReq {
        this['packages'] = packages;
        return this;
    }
}