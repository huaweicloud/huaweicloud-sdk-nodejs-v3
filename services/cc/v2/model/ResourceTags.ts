import { Tag } from './Tag';


export class ResourceTags {
    public action?: ResourceTagsActionEnum | string;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withAction(action: ResourceTagsActionEnum | string): ResourceTags {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<Tag>): ResourceTags {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceTagsActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
