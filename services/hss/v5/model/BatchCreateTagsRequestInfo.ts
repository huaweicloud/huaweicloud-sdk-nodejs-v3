import { ResourceTagInfo } from './ResourceTagInfo';


export class BatchCreateTagsRequestInfo {
    public tags?: Array<ResourceTagInfo>;
    public constructor(tags?: Array<ResourceTagInfo>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<ResourceTagInfo>): BatchCreateTagsRequestInfo {
        this['tags'] = tags;
        return this;
    }
}