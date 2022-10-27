import { PredefineTagRequest } from './PredefineTagRequest';


export class ReqDeletePredefineTag {
    public action: ReqDeletePredefineTagActionEnum;
    public tags: Array<PredefineTagRequest>;
    public constructor(action?: any, tags?: any) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: ReqDeletePredefineTagActionEnum): ReqDeletePredefineTag {
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
