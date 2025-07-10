import { ListTicketParams } from './ListTicketParams';
import { ObjectFilter } from './ObjectFilter';


export class ListTicketParamsWithPage {
    private 'string_filters'?: Array<ObjectFilter>;
    private 'sort_filter'?: ObjectFilter;
    public page?: number;
    private 'per_page'?: number;
    private 'contain_all'?: boolean;
    private 'contain_total'?: boolean;
    private 'contain_sub_ticket'?: boolean;
    private 'ticket_types'?: Array<string>;
    public constructor(stringFilters?: Array<ObjectFilter>) { 
        this['string_filters'] = stringFilters;
    }
    public withStringFilters(stringFilters: Array<ObjectFilter>): ListTicketParamsWithPage {
        this['string_filters'] = stringFilters;
        return this;
    }
    public set stringFilters(stringFilters: Array<ObjectFilter>  | undefined) {
        this['string_filters'] = stringFilters;
    }
    public get stringFilters(): Array<ObjectFilter> | undefined {
        return this['string_filters'];
    }
    public withSortFilter(sortFilter: ObjectFilter): ListTicketParamsWithPage {
        this['sort_filter'] = sortFilter;
        return this;
    }
    public set sortFilter(sortFilter: ObjectFilter  | undefined) {
        this['sort_filter'] = sortFilter;
    }
    public get sortFilter(): ObjectFilter | undefined {
        return this['sort_filter'];
    }
    public withPage(page: number): ListTicketParamsWithPage {
        this['page'] = page;
        return this;
    }
    public withPerPage(perPage: number): ListTicketParamsWithPage {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
    public withContainAll(containAll: boolean): ListTicketParamsWithPage {
        this['contain_all'] = containAll;
        return this;
    }
    public set containAll(containAll: boolean  | undefined) {
        this['contain_all'] = containAll;
    }
    public get containAll(): boolean | undefined {
        return this['contain_all'];
    }
    public withContainTotal(containTotal: boolean): ListTicketParamsWithPage {
        this['contain_total'] = containTotal;
        return this;
    }
    public set containTotal(containTotal: boolean  | undefined) {
        this['contain_total'] = containTotal;
    }
    public get containTotal(): boolean | undefined {
        return this['contain_total'];
    }
    public withContainSubTicket(containSubTicket: boolean): ListTicketParamsWithPage {
        this['contain_sub_ticket'] = containSubTicket;
        return this;
    }
    public set containSubTicket(containSubTicket: boolean  | undefined) {
        this['contain_sub_ticket'] = containSubTicket;
    }
    public get containSubTicket(): boolean | undefined {
        return this['contain_sub_ticket'];
    }
    public withTicketTypes(ticketTypes: Array<string>): ListTicketParamsWithPage {
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