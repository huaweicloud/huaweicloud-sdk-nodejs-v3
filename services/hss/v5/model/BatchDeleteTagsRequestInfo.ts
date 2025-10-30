import { ResourceTagInfo } from './ResourceTagInfo';


export class BatchDeleteTagsRequestInfo {
    public tags?: Array<ResourceTagInfo>;
    private 'sys_tags'?: Array<ResourceTagInfo>;
    public constructor(tags?: Array<ResourceTagInfo>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<ResourceTagInfo>): BatchDeleteTagsRequestInfo {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceTagInfo>): BatchDeleteTagsRequestInfo {
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