

export class DownloadAttachmentRequest {
    private 'ticket_type'?: string;
    private 'doc_id'?: string;
    public constructor(ticketType?: string, docId?: string) { 
        this['ticket_type'] = ticketType;
        this['doc_id'] = docId;
    }
    public withTicketType(ticketType: string): DownloadAttachmentRequest {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): string | undefined {
        return this['ticket_type'];
    }
    public withDocId(docId: string): DownloadAttachmentRequest {
        this['doc_id'] = docId;
        return this;
    }
    public set docId(docId: string  | undefined) {
        this['doc_id'] = docId;
    }
    public get docId(): string | undefined {
        return this['doc_id'];
    }
}