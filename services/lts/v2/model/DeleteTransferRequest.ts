

export class DeleteTransferRequest {
    private 'Content-Type': string | undefined;
    private 'log_transfer_id': string | undefined;
    public constructor(contentType?: any, logTransferId?: any) { 
        this['Content-Type'] = contentType;
        this['log_transfer_id'] = logTransferId;
    }
    public withContentType(contentType: string): DeleteTransferRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withLogTransferId(logTransferId: string): DeleteTransferRequest {
        this['log_transfer_id'] = logTransferId;
        return this;
    }
    public set logTransferId(logTransferId: string | undefined) {
        this['log_transfer_id'] = logTransferId;
    }
    public get logTransferId() {
        return this['log_transfer_id'];
    }
}