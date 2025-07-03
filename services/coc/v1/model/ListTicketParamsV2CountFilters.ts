import { ObjectFilterV2 } from './ObjectFilterV2';


export class ListTicketParamsV2CountFilters {
    public name?: string;
    public filters?: Array<ObjectFilterV2>;
    public constructor() { 
    }
    public withName(name: string): ListTicketParamsV2CountFilters {
        this['name'] = name;
        return this;
    }
    public withFilters(filters: Array<ObjectFilterV2>): ListTicketParamsV2CountFilters {
        this['filters'] = filters;
        return this;
    }
}