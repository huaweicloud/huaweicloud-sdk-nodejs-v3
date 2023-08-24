import { ResourceTagInfo } from './ResourceTagInfo';


export class BatchCreateTagsRequestInfo {
    public tags?: Array<ResourceTagInfo>;
    private 'sys_tags'?: Array<ResourceTagInfo>;
    public constructor() { 
    }
    public withTags(tags: Array<ResourceTagInfo>): BatchCreateTagsRequestInfo {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceTagInfo>): BatchCreateTagsRequestInfo {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceTagInfo>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ResourceTagInfo> | undefined {
        return this['sys_tags'];
    }
}