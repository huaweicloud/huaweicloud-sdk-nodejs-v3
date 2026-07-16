import { CombineInferTmsTags } from './CombineInferTmsTags';
import { TmsMatch } from './TmsMatch';


export class QueryTmsResourceRequest {
    public matches?: Array<TmsMatch>;
    public tags?: Array<CombineInferTmsTags>;
    private 'without_any_tag'?: boolean;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withMatches(matches: Array<TmsMatch>): QueryTmsResourceRequest {
        this['matches'] = matches;
        return this;
    }
    public withTags(tags: Array<CombineInferTmsTags>): QueryTmsResourceRequest {
        this['tags'] = tags;
        return this;
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): QueryTmsResourceRequest {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withLimit(limit: number): QueryTmsResourceRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): QueryTmsResourceRequest {
        this['offset'] = offset;
        return this;
    }
}