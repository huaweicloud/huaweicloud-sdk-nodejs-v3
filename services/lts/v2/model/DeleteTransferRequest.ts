

export class DeleteTransferRequest {
    private 'Content-Type'?: string;
    private 'log_transfer_id'?: string;
    public constructor(contentType?: string, logTransferId?: string) { 
        this['Content-Type'] = contentType;
        this['log_transfer_id'] = logTransferId;
    }
    public withContentType(contentType: string): DeleteTransferRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLogTransferId(logTransferId: string): DeleteTransferRequest {
        this['log_transfer_id'] = logTransferId;
        return this;
    }
    public set logTransferId(logTransferId: string  | undefined) {
        this['log_transfer_id'] = logTransferId;
    }
    public get logTransferId(): string | undefined {
        return this['log_transfer_id'];
    }
}