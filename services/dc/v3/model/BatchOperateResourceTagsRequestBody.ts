import { Tag } from './Tag';


export class BatchOperateResourceTagsRequestBody {
    public action?: BatchOperateResourceTagsRequestBodyActionEnum | string;
    public tags?: Array<Tag>;
    private 'sys_tags'?: Array<Tag>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: BatchOperateResourceTagsRequestBodyActionEnum | string): BatchOperateResourceTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<Tag>): BatchOperateResourceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<Tag>): BatchOperateResourceTagsRequestBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<Tag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<Tag> | undefined {
        return this['sys_tags'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchOperateResourceTagsRequestBodyActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
