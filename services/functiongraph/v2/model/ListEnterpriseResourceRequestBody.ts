import { KvItem } from './KvItem';
import { TagItem } from './TagItem';


export class ListEnterpriseResourceRequestBody {
    private 'without_any_tag'?: boolean;
    public limit?: string;
    public offset?: string;
    public action?: string;
    public matches?: Array<KvItem>;
    private 'sys_tags'?: Array<TagItem>;
    public constructor() { 
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ListEnterpriseResourceRequestBody {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withLimit(limit: string): ListEnterpriseResourceRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListEnterpriseResourceRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withAction(action: string): ListEnterpriseResourceRequestBody {
        this['action'] = action;
        return this;
    }
    public withMatches(matches: Array<KvItem>): ListEnterpriseResourceRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withSysTags(sysTags: Array<TagItem>): ListEnterpriseResourceRequestBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<TagItem>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<TagItem> | undefined {
        return this['sys_tags'];
    }
}