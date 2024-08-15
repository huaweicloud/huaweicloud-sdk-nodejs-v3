import { ListTicketParams } from './ListTicketParams';


export class ListCocTicketOperationHistoriesRequest {
    private 'ticket_type'?: ListCocTicketOperationHistoriesRequestTicketTypeEnum | string;
    public body?: ListTicketParams;
    public constructor(ticketType?: string) { 
        this['ticket_type'] = ticketType;
    }
    public withTicketType(ticketType: ListCocTicketOperationHistoriesRequestTicketTypeEnum | string): ListCocTicketOperationHistoriesRequest {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: ListCocTicketOperationHistoriesRequestTicketTypeEnum | string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): ListCocTicketOperationHistoriesRequestTicketTypeEnum | string | undefined {
        return this['ticket_type'];
    }
    public withBody(body: ListTicketParams): ListCocTicketOperationHistoriesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCocTicketOperationHistoriesRequestTicketTypeEnum {
    INCIDENT = 'incident',
    ISSUES_MGMT = 'issues_mgmt'
}
