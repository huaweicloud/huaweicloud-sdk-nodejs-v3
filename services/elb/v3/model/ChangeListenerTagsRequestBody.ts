import { ChangeResourceTagOption } from './ChangeResourceTagOption';


export class ChangeListenerTagsRequestBody {
    public action?: ChangeListenerTagsRequestBodyActionEnum | string;
    public tags?: Array<ChangeResourceTagOption>;
    public constructor(action?: string, tags?: Array<ChangeResourceTagOption>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: ChangeListenerTagsRequestBodyActionEnum | string): ChangeListenerTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ChangeResourceTagOption>): ChangeListenerTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeListenerTagsRequestBodyActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
