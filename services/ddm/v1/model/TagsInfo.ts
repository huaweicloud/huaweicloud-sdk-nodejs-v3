import { Tags } from './Tags';


export class TagsInfo {
    public tags?: Array<Tags>;
    private 'sys_tags'?: Array<Tags>;
    public constructor() { 
    }
    public withTags(tags: Array<Tags>): TagsInfo {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<Tags>): TagsInfo {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<Tags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<Tags> | undefined {
        return this['sys_tags'];
    }
}