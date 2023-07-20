import { PredefineTagRequest } from './PredefineTagRequest';


export class ReqDeletePredefineTag {
    public action?: ReqDeletePredefineTagActionEnum | string;
    public tags?: Array<PredefineTagRequest>;
    public constructor(action?: string, tags?: Array<PredefineTagRequest>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: ReqDeletePredefineTagActionEnum | string): ReqDeletePredefineTag {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<PredefineTagRequest>): ReqDeletePredefineTag {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReqDeletePredefineTagActionEnum {
    DELETE = 'delete'
}
