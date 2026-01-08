import { ChangeResourceTagOption } from './ChangeResourceTagOption';


export class ChangeLoadbalancerTagsRequestBody {
    public action?: ChangeLoadbalancerTagsRequestBodyActionEnum | string;
    public tags?: Array<ChangeResourceTagOption>;
    public constructor(action?: string, tags?: Array<ChangeResourceTagOption>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: ChangeLoadbalancerTagsRequestBodyActionEnum | string): ChangeLoadbalancerTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ChangeResourceTagOption>): ChangeLoadbalancerTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeLoadbalancerTagsRequestBodyActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
