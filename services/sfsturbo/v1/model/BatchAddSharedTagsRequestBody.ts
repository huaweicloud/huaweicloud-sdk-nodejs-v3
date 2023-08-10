import { ResourceTag } from './ResourceTag';


export class BatchAddSharedTagsRequestBody {
    public action?: BatchAddSharedTagsRequestBodyActionEnum | string;
    public tags?: Array<ResourceTag>;
    private 'sys_tags'?: Array<ResourceTag>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: BatchAddSharedTagsRequestBodyActionEnum | string): BatchAddSharedTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): BatchAddSharedTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceTag>): BatchAddSharedTagsRequestBody {
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

/**
    * @export
    * @enum {string}
    */
export enum BatchAddSharedTagsRequestBodyActionEnum {
    CREATE = 'create'
}
