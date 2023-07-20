import { TagsSingleValue } from './TagsSingleValue';


export class CreateTagsOption {
    public tags?: Array<TagsSingleValue>;
    public action?: CreateTagsOptionActionEnum | string;
    public constructor(tags?: Array<TagsSingleValue>, action?: string) { 
        this['tags'] = tags;
        this['action'] = action;
    }
    public withTags(tags: Array<TagsSingleValue>): CreateTagsOption {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: CreateTagsOptionActionEnum | string): CreateTagsOption {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTagsOptionActionEnum {
    CREATE = 'create'
}
