import { ScsMatch } from './ScsMatch';
import { ScsTag } from './ScsTag';


export class ListCertificatesByTagRequestBody {
    private 'without_any_tag'?: boolean;
    public tags?: Array<ScsTag>;
    private 'tags_any'?: Array<ScsTag>;
    private 'not_tags'?: Array<ScsTag>;
    private 'not_tags_any'?: Array<ScsTag>;
    public limit?: number;
    public offset?: number;
    public action?: string;
    public matches?: Array<ScsMatch>;
    public constructor() { 
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ListCertificatesByTagRequestBody {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withTags(tags: Array<ScsTag>): ListCertificatesByTagRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withTagsAny(tagsAny: Array<ScsTag>): ListCertificatesByTagRequestBody {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<ScsTag>  | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny(): Array<ScsTag> | undefined {
        return this['tags_any'];
    }
    public withNotTags(notTags: Array<ScsTag>): ListCertificatesByTagRequestBody {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<ScsTag>  | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags(): Array<ScsTag> | undefined {
        return this['not_tags'];
    }
    public withNotTagsAny(notTagsAny: Array<ScsTag>): ListCertificatesByTagRequestBody {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<ScsTag>  | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny(): Array<ScsTag> | undefined {
        return this['not_tags_any'];
    }
    public withLimit(limit: number): ListCertificatesByTagRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListCertificatesByTagRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withAction(action: string): ListCertificatesByTagRequestBody {
        this['action'] = action;
        return this;
    }
    public withMatches(matches: Array<ScsMatch>): ListCertificatesByTagRequestBody {
        this['matches'] = matches;
        return this;
    }
}