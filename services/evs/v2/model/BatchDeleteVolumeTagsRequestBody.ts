import { DeleteTagsOption } from './DeleteTagsOption';


export class BatchDeleteVolumeTagsRequestBody {
    public action: BatchDeleteVolumeTagsRequestBodyActionEnum;
    public tags: Array<DeleteTagsOption>;
    public constructor(action?: any, tags?: any) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchDeleteVolumeTagsRequestBodyActionEnum): BatchDeleteVolumeTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<DeleteTagsOption>): BatchDeleteVolumeTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteVolumeTagsRequestBodyActionEnum {
    DELETE = 'delete'
}
