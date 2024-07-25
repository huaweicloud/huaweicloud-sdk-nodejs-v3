import { TmsKeyValues } from './TmsKeyValues';
import { TmsMatchesKeyValue } from './TmsMatchesKeyValue';


export class TmsQueryReq {
    private 'without_any_tag'?: boolean;
    public tags?: Array<TmsKeyValues>;
    private 'sys_tags'?: Array<TmsKeyValues>;
    public matches?: Array<TmsMatchesKeyValue>;
    public constructor() { 
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): TmsQueryReq {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withTags(tags: Array<TmsKeyValues>): TmsQueryReq {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<TmsKeyValues>): TmsQueryReq {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<TmsKeyValues>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<TmsKeyValues> | undefined {
        return this['sys_tags'];
    }
    public withMatches(matches: Array<TmsMatchesKeyValue>): TmsQueryReq {
        this['matches'] = matches;
        return this;
    }
}