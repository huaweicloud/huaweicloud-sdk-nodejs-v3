import { ResourceTag } from './ResourceTag';


export class CbsGetResourceIdTags {
    public action?: string;
    public tags?: Array<ResourceTag>;
    private 'sys_tags'?: Array<ResourceTag>;
    public constructor(action?: string, tags?: Array<ResourceTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: string): CbsGetResourceIdTags {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): CbsGetResourceIdTags {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceTag>): CbsGetResourceIdTags {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceTag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ResourceTag> | undefined {
        return this['sys_tags'];
    }
}