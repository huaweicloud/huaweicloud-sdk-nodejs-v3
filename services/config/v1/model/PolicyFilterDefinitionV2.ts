import { FilterTagDetail } from './FilterTagDetail';


export class PolicyFilterDefinitionV2 {
    private 'region_ids'?: Array<string>;
    private 'resource_types'?: Array<string>;
    private 'resource_ids'?: Array<string>;
    private 'tag_key_logic'?: PolicyFilterDefinitionV2TagKeyLogicEnum | string;
    public tags?: Array<FilterTagDetail>;
    private 'exclude_tag_key_logic'?: PolicyFilterDefinitionV2ExcludeTagKeyLogicEnum | string;
    private 'exclude_tags'?: Array<FilterTagDetail>;
    public constructor() { 
    }
    public withRegionIds(regionIds: Array<string>): PolicyFilterDefinitionV2 {
        this['region_ids'] = regionIds;
        return this;
    }
    public set regionIds(regionIds: Array<string>  | undefined) {
        this['region_ids'] = regionIds;
    }
    public get regionIds(): Array<string> | undefined {
        return this['region_ids'];
    }
    public withResourceTypes(resourceTypes: Array<string>): PolicyFilterDefinitionV2 {
        this['resource_types'] = resourceTypes;
        return this;
    }
    public set resourceTypes(resourceTypes: Array<string>  | undefined) {
        this['resource_types'] = resourceTypes;
    }
    public get resourceTypes(): Array<string> | undefined {
        return this['resource_types'];
    }
    public withResourceIds(resourceIds: Array<string>): PolicyFilterDefinitionV2 {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
    public withTagKeyLogic(tagKeyLogic: PolicyFilterDefinitionV2TagKeyLogicEnum | string): PolicyFilterDefinitionV2 {
        this['tag_key_logic'] = tagKeyLogic;
        return this;
    }
    public set tagKeyLogic(tagKeyLogic: PolicyFilterDefinitionV2TagKeyLogicEnum | string  | undefined) {
        this['tag_key_logic'] = tagKeyLogic;
    }
    public get tagKeyLogic(): PolicyFilterDefinitionV2TagKeyLogicEnum | string | undefined {
        return this['tag_key_logic'];
    }
    public withTags(tags: Array<FilterTagDetail>): PolicyFilterDefinitionV2 {
        this['tags'] = tags;
        return this;
    }
    public withExcludeTagKeyLogic(excludeTagKeyLogic: PolicyFilterDefinitionV2ExcludeTagKeyLogicEnum | string): PolicyFilterDefinitionV2 {
        this['exclude_tag_key_logic'] = excludeTagKeyLogic;
        return this;
    }
    public set excludeTagKeyLogic(excludeTagKeyLogic: PolicyFilterDefinitionV2ExcludeTagKeyLogicEnum | string  | undefined) {
        this['exclude_tag_key_logic'] = excludeTagKeyLogic;
    }
    public get excludeTagKeyLogic(): PolicyFilterDefinitionV2ExcludeTagKeyLogicEnum | string | undefined {
        return this['exclude_tag_key_logic'];
    }
    public withExcludeTags(excludeTags: Array<FilterTagDetail>): PolicyFilterDefinitionV2 {
        this['exclude_tags'] = excludeTags;
        return this;
    }
    public set excludeTags(excludeTags: Array<FilterTagDetail>  | undefined) {
        this['exclude_tags'] = excludeTags;
    }
    public get excludeTags(): Array<FilterTagDetail> | undefined {
        return this['exclude_tags'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyFilterDefinitionV2TagKeyLogicEnum {
    AND = 'AND',
    OR = 'OR'
}
/**
    * @export
    * @enum {string}
    */
export enum PolicyFilterDefinitionV2ExcludeTagKeyLogicEnum {
    AND = 'AND',
    OR = 'OR'
}
