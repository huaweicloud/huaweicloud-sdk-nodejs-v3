import { ListTicketParamsV2CountFilters } from './ListTicketParamsV2CountFilters';
import { ObjectFilterV2 } from './ObjectFilterV2';


export class ListTicketParamsV2 {
    public fields?: Array<string>;
    private 'count_filters'?: Array<ListTicketParamsV2CountFilters>;
    private 'string_filters'?: Array<ObjectFilterV2>;
    private 'group_by_filter'?: ObjectFilterV2;
    private 'int_filters'?: Array<ObjectFilterV2>;
    private 'sort_filter'?: ObjectFilterV2;
    public condition?: string;
    public constructor() { 
    }
    public withFields(fields: Array<string>): ListTicketParamsV2 {
        this['fields'] = fields;
        return this;
    }
    public withCountFilters(countFilters: Array<ListTicketParamsV2CountFilters>): ListTicketParamsV2 {
        this['count_filters'] = countFilters;
        return this;
    }
    public set countFilters(countFilters: Array<ListTicketParamsV2CountFilters>  | undefined) {
        this['count_filters'] = countFilters;
    }
    public get countFilters(): Array<ListTicketParamsV2CountFilters> | undefined {
        return this['count_filters'];
    }
    public withStringFilters(stringFilters: Array<ObjectFilterV2>): ListTicketParamsV2 {
        this['string_filters'] = stringFilters;
        return this;
    }
    public set stringFilters(stringFilters: Array<ObjectFilterV2>  | undefined) {
        this['string_filters'] = stringFilters;
    }
    public get stringFilters(): Array<ObjectFilterV2> | undefined {
        return this['string_filters'];
    }
    public withGroupByFilter(groupByFilter: ObjectFilterV2): ListTicketParamsV2 {
        this['group_by_filter'] = groupByFilter;
        return this;
    }
    public set groupByFilter(groupByFilter: ObjectFilterV2  | undefined) {
        this['group_by_filter'] = groupByFilter;
    }
    public get groupByFilter(): ObjectFilterV2 | undefined {
        return this['group_by_filter'];
    }
    public withIntFilters(intFilters: Array<ObjectFilterV2>): ListTicketParamsV2 {
        this['int_filters'] = intFilters;
        return this;
    }
    public set intFilters(intFilters: Array<ObjectFilterV2>  | undefined) {
        this['int_filters'] = intFilters;
    }
    public get intFilters(): Array<ObjectFilterV2> | undefined {
        return this['int_filters'];
    }
    public withSortFilter(sortFilter: ObjectFilterV2): ListTicketParamsV2 {
        this['sort_filter'] = sortFilter;
        return this;
    }
    public set sortFilter(sortFilter: ObjectFilterV2  | undefined) {
        this['sort_filter'] = sortFilter;
    }
    public get sortFilter(): ObjectFilterV2 | undefined {
        return this['sort_filter'];
    }
    public withCondition(condition: string): ListTicketParamsV2 {
        this['condition'] = condition;
        return this;
    }
}