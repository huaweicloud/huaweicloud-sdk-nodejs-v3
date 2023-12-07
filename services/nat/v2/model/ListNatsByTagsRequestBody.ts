import { PublicMatch } from './PublicMatch';
import { PublicTag } from './PublicTag';


export class ListNatsByTagsRequestBody {
    public tags?: Array<PublicTag>;
    private 'tags_any'?: Array<PublicTag>;
    private 'not_tags'?: Array<PublicTag>;
    private 'not_tags_any'?: Array<PublicTag>;
    public limit?: string;
    public offset?: string;
    public action?: string;
    public matches?: Array<PublicMatch>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withTags(tags: Array<PublicTag>): ListNatsByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withTagsAny(tagsAny: Array<PublicTag>): ListNatsByTagsRequestBody {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<PublicTag>  | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny(): Array<PublicTag> | undefined {
        return this['tags_any'];
    }
    public withNotTags(notTags: Array<PublicTag>): ListNatsByTagsRequestBody {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<PublicTag>  | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags(): Array<PublicTag> | undefined {
        return this['not_tags'];
    }
    public withNotTagsAny(notTagsAny: Array<PublicTag>): ListNatsByTagsRequestBody {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<PublicTag>  | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny(): Array<PublicTag> | undefined {
        return this['not_tags_any'];
    }
    public withLimit(limit: string): ListNatsByTagsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListNatsByTagsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withAction(action: string): ListNatsByTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withMatches(matches: Array<PublicMatch>): ListNatsByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
}