import { ResourceTag } from './ResourceTag';


export class AlterResourceTagsInBatchesRequestBody {
    public tags?: Array<ResourceTag>;
    private 'sys_tags'?: Array<ResourceTag>;
    public constructor() { 
    }
    public withTags(tags: Array<ResourceTag>): AlterResourceTagsInBatchesRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceTag>): AlterResourceTagsInBatchesRequestBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceTag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ResourceTag> | undefined {
        return this['sys_tags'];
    }
}