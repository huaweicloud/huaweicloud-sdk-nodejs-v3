import { SearchPolicyRequestBodyCondition } from './SearchPolicyRequestBodyCondition';
import { SearchPolicyRequestBodyGroupBy } from './SearchPolicyRequestBodyGroupBy';
import { SearchPolicyRequestBodySort } from './SearchPolicyRequestBodySort';


export class SearchPolicyRequestBody {
    public limit?: number;
    public offset?: number;
    public condition?: SearchPolicyRequestBodyCondition;
    public sort?: Array<SearchPolicyRequestBodySort>;
    private 'group_by'?: SearchPolicyRequestBodyGroupBy;
    public constructor() { 
    }
    public withLimit(limit: number): SearchPolicyRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchPolicyRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withCondition(condition: SearchPolicyRequestBodyCondition): SearchPolicyRequestBody {
        this['condition'] = condition;
        return this;
    }
    public withSort(sort: Array<SearchPolicyRequestBodySort>): SearchPolicyRequestBody {
        this['sort'] = sort;
        return this;
    }
    public withGroupBy(groupBy: SearchPolicyRequestBodyGroupBy): SearchPolicyRequestBody {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: SearchPolicyRequestBodyGroupBy  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): SearchPolicyRequestBodyGroupBy | undefined {
        return this['group_by'];
    }
}