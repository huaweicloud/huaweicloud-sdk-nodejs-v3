import { Tag } from './Tag';


export class BatchCreateVolumeTagsRequestBody {
    public action?: BatchCreateVolumeTagsRequestBodyActionEnum | string;
    public tags?: Array<Tag>;
    public constructor(action?: string, tags?: Array<Tag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateVolumeTagsRequestBodyActionEnum | string): BatchCreateVolumeTagsRequestBody {
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
