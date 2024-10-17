import { ResourceTagRequestTags } from './ResourceTagRequestTags';


export class ResourceTagRequest {
    public tags?: Array<ResourceTagRequestTags>;
    private 'sys_tags'?: Array<ResourceTagRequestTags>;
    public constructor() { 
    }
    public withTags(tags: Array<ResourceTagRequestTags>): ResourceTagRequest {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceTagRequestTags>): ResourceTagRequest {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceTagRequestTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ResourceTagRequestTags> | undefined {
        return this['sys_tags'];
    }
}