import { Tag } from './Tag';


export class Tags {
    public action?: TagsActionEnum | string;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withAction(action: TagsActionEnum | string): Tags {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<Tag>): Tags {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TagsActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
