import { CreateCocTicketRequestBody } from './CreateCocTicketRequestBody';


export class CreateTicketRequest {
    private 'ticket_type'?: CreateTicketRequestTicketTypeEnum | string;
    public body?: CreateCocTicketRequestBody;
    public constructor(ticketType?: string) { 
        this['ticket_type'] = ticketType;
    }
    public withTicketType(ticketType: CreateTicketRequestTicketTypeEnum | string): CreateTicketRequest {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: CreateTicketRequestTicketTypeEnum | string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): CreateTicketRequestTicketTypeEnum | string | undefined {
        return this['ticket_type'];
    }
    public withBody(body: CreateCocTicketRequestBody): CreateTicketRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTicketRequestTicketTypeEnum {
    CHANGE = 'change',
    ISSUES_MGMT = 'issues_mgmt'
}
