import { SkillCategoryEnum } from './SkillCategoryEnum';
import { SkillSourceEnum } from './SkillSourceEnum';
import { SkillStatusEnum } from './SkillStatusEnum';


export class UpdateSkillReq {
    private 'display_name'?: string;
    private 'alias_name'?: string;
    public description?: string;
    public category?: SkillCategoryEnum;
    public tags?: Array<string>;
    public cover?: string;
    public status?: SkillStatusEnum;
    public source?: SkillSourceEnum;
    private 'support_os_types'?: Array<string>;
    public constructor() { 
    }
    public withDisplayName(displayName: string): UpdateSkillReq {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withAliasName(aliasName: string): UpdateSkillReq {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string  | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName(): string | undefined {
        return this['alias_name'];
    }
    public withDescription(description: string): UpdateSkillReq {
        this['description'] = description;
        return this;
    }
    public withCategory(category: SkillCategoryEnum): UpdateSkillReq {
        this['category'] = category;
        return this;
    }
    public withTags(tags: Array<string>): UpdateSkillReq {
        this['tags'] = tags;
        return this;
    }
    public withCover(cover: string): UpdateSkillReq {
        this['cover'] = cover;
        return this;
    }
    public withStatus(status: SkillStatusEnum): UpdateSkillReq {
        this['status'] = status;
        return this;
    }
    public withSource(source: SkillSourceEnum): UpdateSkillReq {
        this['source'] = source;
        return this;
    }
    public withSupportOsTypes(supportOsTypes: Array<string>): UpdateSkillReq {
        this['support_os_types'] = supportOsTypes;
        return this;
    }
    public set supportOsTypes(supportOsTypes: Array<string>  | undefined) {
        this['support_os_types'] = supportOsTypes;
    }
    public get supportOsTypes(): Array<string> | undefined {
        return this['support_os_types'];
    }
}