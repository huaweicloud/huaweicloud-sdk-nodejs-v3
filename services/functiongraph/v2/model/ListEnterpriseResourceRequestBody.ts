import { TagItem } from './TagItem';


export class ListEnterpriseResourceRequestBody {
    private 'without_any_tag'?: boolean | undefined;
    public limit?: string;
    public offset?: string;
    public action?: string;
    public matches?: Array<{ [key: string]: string; }>;
    private 'sys_tags'?: Array<TagItem> | undefined;
    public constructor() { 
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ListEnterpriseResourceRequestBody {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag() {
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
    public withMatches(matches: Array<{ [key: string]: string; }>): ListEnterpriseResourceRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withSysTags(sysTags: Array<TagItem>): ListEnterpriseResourceRequestBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<TagItem> | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags() {
        return this['sys_tags'];
    }
}