import { ObjectFilter } from './ObjectFilter';


export class ListTicketParams {
    private 'string_filters'?: Array<ObjectFilter>;
    private 'sort_filter'?: ObjectFilter;
    public constructor(stringFilters?: Array<ObjectFilter>) { 
        this['string_filters'] = stringFilters;
    }
    public withStringFilters(stringFilters: Array<ObjectFilter>): ListTicketParams {
        this['string_filters'] = stringFilters;
        return this;
    }
    public set stringFilters(stringFilters: Array<ObjectFilter>  | undefined) {
        this['string_filters'] = stringFilters;
    }
    public get stringFilters(): Array<ObjectFilter> | undefined {
        return this['string_filters'];
    }
    public withSortFilter(sortFilter: ObjectFilter): ListTicketParams {
        this['sort_filter'] = sortFilter;
        return this;
    }
    public set sortFilter(sortFilter: ObjectFilter  | undefined) {
        this['sort_filter'] = sortFilter;
    }
    public get sortFilter(): ObjectFilter | undefined {
        return this['sort_filter'];
    }
}