import { ConditionVO } from './ConditionVO';
import { PageInfoVO } from './PageInfoVO';
import { SortInfo } from './SortInfo';


export class QueryVO {
    public filter?: Array<{ [key: string]: ConditionVO; }>;
    private 'filter_mode'?: string;
    public page?: PageInfoVO;
    public sort?: Array<SortInfo>;
    private 'return_fields'?: Array<string>;
    public constructor() { 
    }
    public withFilter(filter: Array<{ [key: string]: ConditionVO; }>): QueryVO {
        this['filter'] = filter;
        return this;
    }
    public withFilterMode(filterMode: string): QueryVO {
        this['filter_mode'] = filterMode;
        return this;
    }
    public set filterMode(filterMode: string  | undefined) {
        this['filter_mode'] = filterMode;
    }
    public get filterMode(): string | undefined {
        return this['filter_mode'];
    }
    public withPage(page: PageInfoVO): QueryVO {
        this['page'] = page;
        return this;
    }
    public withSort(sort: Array<SortInfo>): QueryVO {
        this['sort'] = sort;
        return this;
    }
    public withReturnFields(returnFields: Array<string>): QueryVO {
        this['return_fields'] = returnFields;
        return this;
    }
    public set returnFields(returnFields: Array<string>  | undefined) {
        this['return_fields'] = returnFields;
    }
    public get returnFields(): Array<string> | undefined {
        return this['return_fields'];
    }
}