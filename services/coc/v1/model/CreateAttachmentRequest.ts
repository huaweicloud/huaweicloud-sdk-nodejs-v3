import { CreateAttachmentRequestBody } from './CreateAttachmentRequestBody';


export class CreateAttachmentRequest {
    private 'ticket_type'?: string;
    public body?: CreateAttachmentRequestBody;
    public constructor(ticketType?: string) { 
        this['ticket_type'] = ticketType;
    }
    public withTicketType(ticketType: string): CreateAttachmentRequest {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): string | undefined {
        return this['ticket_type'];
    }
    public withBody(body: CreateAttachmentRequestBody): CreateAttachmentRequest {
        this['body'] = body;
        return this;
    }
}