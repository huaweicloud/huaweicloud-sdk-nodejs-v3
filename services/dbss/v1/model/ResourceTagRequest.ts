import { KeyValueBean } from './KeyValueBean';


export class ResourceTagRequest {
    public tags?: Array<KeyValueBean>;
    private 'sys_tags'?: Array<KeyValueBean>;
    public constructor() { 
    }
    public withTags(tags: Array<KeyValueBean>): ResourceTagRequest {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<KeyValueBean>): ResourceTagRequest {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<KeyValueBean>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<KeyValueBean> | undefined {
        return this['sys_tags'];
    }
}