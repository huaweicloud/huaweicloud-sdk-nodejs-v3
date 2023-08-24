import { StyleAssetItem } from './StyleAssetItem';
import { StyleExtraMeta } from './StyleExtraMeta';


export class CreateStyleRequestBody {
    public name?: string;
    public description?: string;
    private 'project_id'?: string;
    public status?: string;
    public sex?: CreateStyleRequestBodySexEnum | string;
    public tags?: Array<string>;
    private 'style_assets'?: Array<StyleAssetItem>;
    private 'extra_meta'?: StyleExtraMeta;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateStyleRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateStyleRequestBody {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): CreateStyleRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStatus(status: string): CreateStyleRequestBody {
        this['status'] = status;
        return this;
    }
    public withSex(sex: CreateStyleRequestBodySexEnum | string): CreateStyleRequestBody {
        this['sex'] = sex;
        return this;
    }
    public withTags(tags: Array<string>): CreateStyleRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withStyleAssets(styleAssets: Array<StyleAssetItem>): CreateStyleRequestBody {
        this['style_assets'] = styleAssets;
        return this;
    }
    public set styleAssets(styleAssets: Array<StyleAssetItem>  | undefined) {
        this['style_assets'] = styleAssets;
    }
    public get styleAssets(): Array<StyleAssetItem> | undefined {
        return this['style_assets'];
    }
    public withExtraMeta(extraMeta: StyleExtraMeta): CreateStyleRequestBody {
        this['extra_meta'] = extraMeta;
        return this;
    }
    public set extraMeta(extraMeta: StyleExtraMeta  | undefined) {
        this['extra_meta'] = extraMeta;
    }
    public get extraMeta(): StyleExtraMeta | undefined {
        return this['extra_meta'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateStyleRequestBodySexEnum {
    UNKNOW = 'UNKNOW',
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}
