import { ResourceTagDeleteRequestTags } from './ResourceTagDeleteRequestTags';


export class ResourceTagDeleteRequest {
    public tags?: Array<ResourceTagDeleteRequestTags>;
    private 'sys_tags'?: Array<ResourceTagDeleteRequestTags>;
    public constructor() { 
    }
    public withTags(tags: Array<ResourceTagDeleteRequestTags>): ResourceTagDeleteRequest {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceTagDeleteRequestTags>): ResourceTagDeleteRequest {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceTagDeleteRequestTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ResourceTagDeleteRequestTags> | undefined {
        return this['sys_tags'];
    }
}