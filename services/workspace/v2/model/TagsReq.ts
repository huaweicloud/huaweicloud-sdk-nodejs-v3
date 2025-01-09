import { Tag } from './Tag';


export class TagsReq {
    public action?: string;
    public tags?: Array<Tag>;
    private 'sys_tags'?: Array<Tag>;
    public constructor() { 
    }
    public withAction(action: string): TagsReq {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<Tag>): TagsReq {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<Tag>): TagsReq {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<Tag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<Tag> | undefined {
        return this['sys_tags'];
    }
}