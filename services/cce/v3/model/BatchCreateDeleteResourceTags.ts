import { ResourceTagBody } from './ResourceTagBody';


export class BatchCreateDeleteResourceTags {
    public action?: BatchCreateDeleteResourceTagsActionEnum | string;
    public tags?: Array<ResourceTagBody>;
    private 'sys_tags'?: Array<ResourceTagBody>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: BatchCreateDeleteResourceTagsActionEnum | string): BatchCreateDeleteResourceTags {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTagBody>): BatchCreateDeleteResourceTags {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceTagBody>): BatchCreateDeleteResourceTags {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceTagBody>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ResourceTagBody> | undefined {
        return this['sys_tags'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateDeleteResourceTagsActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
