import { KvItem } from './KvItem';


export class UpdateFunctionTagsRequestBody {
    public action?: string;
    public tags?: Array<KvItem>;
    private 'sys_tags'?: Array<KvItem>;
    public constructor() { 
    }
    public withAction(action: string): UpdateFunctionTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<KvItem>): UpdateFunctionTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<KvItem>): UpdateFunctionTagsRequestBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<KvItem>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<KvItem> | undefined {
        return this['sys_tags'];
    }
}