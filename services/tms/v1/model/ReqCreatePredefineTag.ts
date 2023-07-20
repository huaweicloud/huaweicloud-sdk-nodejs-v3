import { PredefineTagRequest } from './PredefineTagRequest';


export class ReqCreatePredefineTag {
    public action?: ReqCreatePredefineTagActionEnum | string;
    public tags?: Array<PredefineTagRequest>;
    public constructor(action?: string, tags?: Array<PredefineTagRequest>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: ReqCreatePredefineTagActionEnum | string): ReqCreatePredefineTag {
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
