import { CreateStyleRequestBody } from './CreateStyleRequestBody';
import { StyleAssetItem } from './StyleAssetItem';
import { StyleExtraMeta } from './StyleExtraMeta';


export class StyleInfo {
    public name?: string;
    public description?: string;
    private 'project_id'?: string;
    public status?: string;
    public sex?: StyleInfoSexEnum | string;
    public tags?: Array<string>;
    private 'style_assets'?: Array<StyleAssetItem>;
    private 'extra_meta'?: StyleExtraMeta;
    private 'style_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public state?: StyleInfoStateEnum | string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): StyleInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): StyleInfo {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): StyleInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStatus(status: string): StyleInfo {
        this['status'] = status;
        return this;
    }
    public withSex(sex: StyleInfoSexEnum | string): StyleInfo {
        this['sex'] = sex;
        return this;
    }
    public withTags(tags: Array<string>): StyleInfo {
        this['tags'] = tags;
        return this;
    }
    public withStyleAssets(styleAssets: Array<StyleAssetItem>): StyleInfo {
        this['style_assets'] = styleAssets;
        return this;
    }
    public set styleAssets(styleAssets: Array<StyleAssetItem>  | undefined) {
        this['style_assets'] = styleAssets;
    }
    public get styleAssets(): Array<StyleAssetItem> | undefined {
        return this['style_assets'];
    }
    public withExtraMeta(extraMeta: StyleExtraMeta): StyleInfo {
        this['extra_meta'] = extraMeta;
        return this;
    }
    public set extraMeta(extraMeta: StyleExtraMeta  | undefined) {
        this['extra_meta'] = extraMeta;
    }
    public get extraMeta(): StyleExtraMeta | undefined {
        return this['extra_meta'];
    }
    public withStyleId(styleId: string): StyleInfo {
        this['style_id'] = styleId;
        return this;
    }
    public set styleId(styleId: string  | undefined) {
        this['style_id'] = styleId;
    }
    public get styleId(): string | undefined {
        return this['style_id'];
    }
    public withCreateTime(createTime: string): StyleInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): StyleInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withState(state: StyleInfoStateEnum | string): StyleInfo {
        this['state'] = state;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StyleInfoSexEnum {
    UNKNOW = 'UNKNOW',
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}
/**
    * @export
    * @enum {string}
    */
export enum StyleInfoStateEnum {
    CREATING = 'CREATING',
    PUBLISHED = 'PUBLISHED',
    DELETED = 'DELETED',
    UNPUBLISHED = 'UNPUBLISHED',
    PUBLISHING = 'PUBLISHING'
}
