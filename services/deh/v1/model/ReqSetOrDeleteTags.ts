import { ResourceTag } from './ResourceTag';


export class ReqSetOrDeleteTags {
    public tags?: Array<ResourceTag>;
    public action?: ReqSetOrDeleteTagsActionEnum | string;
    public constructor(tags?: Array<ResourceTag>, action?: string) { 
        this['tags'] = tags;
        this['action'] = action;
    }
    public withTags(tags: Array<ResourceTag>): ReqSetOrDeleteTags {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: ReqSetOrDeleteTagsActionEnum | string): ReqSetOrDeleteTags {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReqSetOrDeleteTagsActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
