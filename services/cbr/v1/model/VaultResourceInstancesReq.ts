import { Match } from './Match';
import { SysTags } from './SysTags';
import { TagsReq } from './TagsReq';


export class VaultResourceInstancesReq {
    private 'without_any_tag'?: boolean;
    public tags?: Array<TagsReq>;
    private 'tags_any'?: Array<TagsReq>;
    private 'not_tags'?: Array<TagsReq>;
    private 'not_tags_any'?: Array<TagsReq>;
    private 'sys_tags'?: Array<SysTags>;
    public limit?: string;
    public offset?: string;
    public action?: string;
    public matches?: Array<Match>;
    private 'cloud_type'?: VaultResourceInstancesReqCloudTypeEnum | string;
    private 'object_type'?: VaultResourceInstancesReqObjectTypeEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): VaultResourceInstancesReq {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withTags(tags: Array<TagsReq>): VaultResourceInstancesReq {
        this['tags'] = tags;
        return this;
    }
    public withTagsAny(tagsAny: Array<TagsReq>): VaultResourceInstancesReq {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<TagsReq>  | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny(): Array<TagsReq> | undefined {
        return this['tags_any'];
    }
    public withNotTags(notTags: Array<TagsReq>): VaultResourceInstancesReq {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<TagsReq>  | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags(): Array<TagsReq> | undefined {
        return this['not_tags'];
    }
    public withNotTagsAny(notTagsAny: Array<TagsReq>): VaultResourceInstancesReq {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<TagsReq>  | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny(): Array<TagsReq> | undefined {
        return this['not_tags_any'];
    }
    public withSysTags(sysTags: Array<SysTags>): VaultResourceInstancesReq {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<SysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<SysTags> | undefined {
        return this['sys_tags'];
    }
    public withLimit(limit: string): VaultResourceInstancesReq {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): VaultResourceInstancesReq {
        this['offset'] = offset;
        return this;
    }
    public withAction(action: string): VaultResourceInstancesReq {
        this['action'] = action;
        return this;
    }
    public withMatches(matches: Array<Match>): VaultResourceInstancesReq {
        this['matches'] = matches;
        return this;
    }
    public withCloudType(cloudType: VaultResourceInstancesReqCloudTypeEnum | string): VaultResourceInstancesReq {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: VaultResourceInstancesReqCloudTypeEnum | string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): VaultResourceInstancesReqCloudTypeEnum | string | undefined {
        return this['cloud_type'];
    }
    public withObjectType(objectType: VaultResourceInstancesReqObjectTypeEnum | string): VaultResourceInstancesReq {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: VaultResourceInstancesReqObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): VaultResourceInstancesReqObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VaultResourceInstancesReqCloudTypeEnum {
    PUBLIC = 'public',
    HYBRID = 'hybrid'
}
/**
    * @export
    * @enum {string}
    */
export enum VaultResourceInstancesReqObjectTypeEnum {
    SERVER = 'server',
    DISK = 'disk'
}
