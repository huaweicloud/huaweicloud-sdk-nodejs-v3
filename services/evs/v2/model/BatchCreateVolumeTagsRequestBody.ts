import { Tag } from './Tag';


export class BatchCreateVolumeTagsRequestBody {
    public action: BatchCreateVolumeTagsRequestBodyActionEnum;
    public tags: Array<Tag>;
    public constructor(action?: any, tags?: any) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateVolumeTagsRequestBodyActionEnum): BatchCreateVolumeTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<Tag>): BatchCreateVolumeTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateVolumeTagsRequestBodyActionEnum {
    CREATE = 'create'
}
