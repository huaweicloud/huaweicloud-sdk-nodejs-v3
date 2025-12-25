import { SearchPolicyRequestBodyGroupByGroupByHit } from './SearchPolicyRequestBodyGroupByGroupByHit';


export class SearchPolicyRequestBodyGroupBy {
    private 'group_by_fields'?: Array<string>;
    private 'group_by_hit'?: SearchPolicyRequestBodyGroupByGroupByHit;
    public constructor() { 
    }
    public withGroupByFields(groupByFields: Array<string>): SearchPolicyRequestBodyGroupBy {
        this['group_by_fields'] = groupByFields;
        return this;
    }
    public set groupByFields(groupByFields: Array<string>  | undefined) {
        this['group_by_fields'] = groupByFields;
    }
    public get groupByFields(): Array<string> | undefined {
        return this['group_by_fields'];
    }
    public withGroupByHit(groupByHit: SearchPolicyRequestBodyGroupByGroupByHit): SearchPolicyRequestBodyGroupBy {
        this['group_by_hit'] = groupByHit;
        return this;
    }
    public set groupByHit(groupByHit: SearchPolicyRequestBodyGroupByGroupByHit  | undefined) {
        this['group_by_hit'] = groupByHit;
    }
    public get groupByHit(): SearchPolicyRequestBodyGroupByGroupByHit | undefined {
        return this['group_by_hit'];
    }
}