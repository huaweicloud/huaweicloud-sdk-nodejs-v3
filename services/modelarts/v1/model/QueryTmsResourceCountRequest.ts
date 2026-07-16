import { CombineInferTmsTags } from './CombineInferTmsTags';
import { TmsMatch } from './TmsMatch';


export class QueryTmsResourceCountRequest {
    public matches?: Array<TmsMatch>;
    public tags?: Array<CombineInferTmsTags>;
    private 'without_any_tag'?: boolean;
    public constructor() { 
    }
    public withMatches(matches: Array<TmsMatch>): QueryTmsResourceCountRequest {
        this['matches'] = matches;
        return this;
    }
    public withTags(tags: Array<CombineInferTmsTags>): QueryTmsResourceCountRequest {
        this['tags'] = tags;
        return this;
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): QueryTmsResourceCountRequest {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
}