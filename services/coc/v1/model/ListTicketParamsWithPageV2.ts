import { ListTicketParamsV2 } from './ListTicketParamsV2';
import { ListTicketParamsV2CountFilters } from './ListTicketParamsV2CountFilters';
import { ObjectFilterV2 } from './ObjectFilterV2';


export class ListTicketParamsWithPageV2 {
    public fields?: Array<string>;
    private 'count_filters'?: Array<ListTicketParamsV2CountFilters>;
    private 'string_filters'?: Array<ObjectFilterV2>;
    private 'group_by_filter'?: ObjectFilterV2;
    private 'int_filters'?: Array<ObjectFilterV2>;
    private 'sort_filter'?: ObjectFilterV2;
    public condition?: string;
    public page?: number;
    private 'per_page'?: number;
    private 'contain_all'?: boolean;
    private 'contain_total'?: boolean;
    private 'contain_sub_ticket'?: boolean;
    private 'ticket_types'?: Array<string>;
    public constructor() { 
    }
    public withFields(fields: Array<string>): ListTicketParamsWithPageV2 {
        this['fields'] = fields;
        return this;
    }
    public withCountFilters(countFilters: Array<ListTicketParamsV2CountFilters>): ListTicketParamsWithPageV2 {
        this['count_filters'] = countFilters;
        return this;
    }
    public set countFilters(countFilters: Array<ListTicketParamsV2CountFilters>  | undefined) {
        this['count_filters'] = countFilters;
    }
    public get countFilters(): Array<ListTicketParamsV2CountFilters> | undefined {
        return this['count_filters'];
    }
    public withStringFilters(stringFilters: Array<ObjectFilterV2>): ListTicketParamsWithPageV2 {
        this['string_filters'] = stringFilters;
        return this;
    }
    public set stringFilters(stringFilters: Array<ObjectFilterV2>  | undefined) {
        this['string_filters'] = stringFilters;
    }
    public get stringFilters(): Array<ObjectFilterV2> | undefined {
        return this['string_filters'];
    }
    public withGroupByFilter(groupByFilter: ObjectFilterV2): ListTicketParamsWithPageV2 {
        this['group_by_filter'] = groupByFilter;
        return this;
    }
    public set groupByFilter(groupByFilter: ObjectFilterV2  | undefined) {
        this['group_by_filter'] = groupByFilter;
    }
    public get groupByFilter(): ObjectFilterV2 | undefined {
        return this['group_by_filter'];
    }
    public withIntFilters(intFilters: Array<ObjectFilterV2>): ListTicketParamsWithPageV2 {
        this['int_filters'] = intFilters;
        return this;
    }
    public set intFilters(intFilters: Array<ObjectFilterV2>  | undefined) {
        this['int_filters'] = intFilters;
    }
    public get intFilters(): Array<ObjectFilterV2> | undefined {
        return this['int_filters'];
    }
    public withSortFilter(sortFilter: ObjectFilterV2): ListTicketParamsWithPageV2 {
        this['sort_filter'] = sortFilter;
        return this;
    }
    public set sortFilter(sortFilter: ObjectFilterV2  | undefined) {
        this['sort_filter'] = sortFilter;
    }
    public get sortFilter(): ObjectFilterV2 | undefined {
        return this['sort_filter'];
    }
    public withCondition(condition: string): ListTicketParamsWithPageV2 {
        this['condition'] = condition;
        return this;
    }
    public withPage(page: number): ListTicketParamsWithPageV2 {
        this['page'] = page;
        return this;
    }
    public withPerPage(perPage: number): ListTicketParamsWithPageV2 {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
    public withContainAll(containAll: boolean): ListTicketParamsWithPageV2 {
        this['contain_all'] = containAll;
        return this;
    }
    public set containAll(containAll: boolean  | undefined) {
        this['contain_all'] = containAll;
    }
    public get containAll(): boolean | undefined {
        return this['contain_all'];
    }
    public withContainTotal(containTotal: boolean): ListTicketParamsWithPageV2 {
        this['contain_total'] = containTotal;
        return this;
    }
    public set containTotal(containTotal: boolean  | undefined) {
        this['contain_total'] = containTotal;
    }
    public get containTotal(): boolean | undefined {
        return this['contain_total'];
    }
    public withContainSubTicket(containSubTicket: boolean): ListTicketParamsWithPageV2 {
        this['contain_sub_ticket'] = containSubTicket;
        return this;
    }
    public set containSubTicket(containSubTicket: boolean  | undefined) {
        this['contain_sub_ticket'] = containSubTicket;
    }
    public get containSubTicket(): boolean | undefined {
        return this['contain_sub_ticket'];
    }
    public withTicketTypes(ticketTypes: Array<string>): ListTicketParamsWithPageV2 {
        this['ticket_types'] = ticketTypes;
        return this;
    }
    public set ticketTypes(ticketTypes: Array<string>  | undefined) {
        this['ticket_types'] = ticketTypes;
    }
    public get ticketTypes(): Array<string> | undefined {
        return this['ticket_types'];
    }
}