import { TagsSingleValue } from './TagsSingleValue';


export class DeleteTagsOption {
    public tags?: Array<TagsSingleValue>;
    public action?: DeleteTagsOptionActionEnum | string;
    public constructor(tags?: Array<TagsSingleValue>, action?: string) { 
        this['tags'] = tags;
        this['action'] = action;
    }
    public withTags(tags: Array<TagsSingleValue>): DeleteTagsOption {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: DeleteTagsOptionActionEnum | string): DeleteTagsOption {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteTagsOptionActionEnum {
    DELETE = 'delete'
}
