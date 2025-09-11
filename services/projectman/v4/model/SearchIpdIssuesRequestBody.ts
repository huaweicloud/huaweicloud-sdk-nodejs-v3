import { ConditionVO } from './ConditionVO';
import { PageInfoVO } from './PageInfoVO';
import { SortInfo } from './SortInfo';


export class SearchIpdIssuesRequestBody {
    public filter?: Array<{ [key: string]: ConditionVO; }>;
    public page?: PageInfoVO;
    private 'return_fields'?: Array<string>;
    public sort?: Array<SortInfo>;
    public constructor() { 
    }
    public withFilter(filter: Array<{ [key: string]: ConditionVO; }>): SearchIpdIssuesRequestBody {
        this['filter'] = filter;
        return this;
    }
    public withPage(page: PageInfoVO): SearchIpdIssuesRequestBody {
        this['page'] = page;
        return this;
    }
    public withReturnFields(returnFields: Array<string>): SearchIpdIssuesRequestBody {
        this['return_fields'] = returnFields;
        return this;
    }
    public set returnFields(returnFields: Array<string>  | undefined) {
        this['return_fields'] = returnFields;
    }
    public get returnFields(): Array<string> | undefined {
        return this['return_fields'];
    }
    public withSort(sort: Array<SortInfo>): SearchIpdIssuesRequestBody {
        this['sort'] = sort;
        return this;
    }
}