import { ListTicketParamsWithPageV2 } from './ListTicketParamsWithPageV2';


export class ListIncidentsRequest {
    public body?: ListTicketParamsWithPageV2;
    public constructor() { 
    }
    public withBody(body: ListTicketParamsWithPageV2): ListIncidentsRequest {
        this['body'] = body;
        return this;
    }
}