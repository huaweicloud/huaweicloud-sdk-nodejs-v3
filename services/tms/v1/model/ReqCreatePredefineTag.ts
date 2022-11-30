import { PredefineTagRequest } from './PredefineTagRequest';


export class ReqCreatePredefineTag {
    public action: ReqCreatePredefineTagActionEnum;
    public tags: Array<PredefineTagRequest>;
    public constructor(action?: any, tags?: any) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: ReqCreatePredefineTagActionEnum): ReqCreatePredefineTag {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<PredefineTagRequest>): ReqCreatePredefineTag {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReqCreatePredefineTagActionEnum {
    CREATE = 'create'
}
