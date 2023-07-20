import { UpdateTransferRequestBodyLogTransferInfo } from './UpdateTransferRequestBodyLogTransferInfo';


export class UpdateTransferRequestBody {
    private 'log_transfer_id'?: string;
    private 'log_transfer_info'?: UpdateTransferRequestBodyLogTransferInfo;
    public constructor(logTransferId?: string, logTransferInfo?: UpdateTransferRequestBodyLogTransferInfo) { 
        this['log_transfer_id'] = logTransferId;
        this['log_transfer_info'] = logTransferInfo;
    }
    public withLogTransferId(logTransferId: string): UpdateTransferRequestBody {
        this['log_transfer_id'] = logTransferId;
        return this;
    }
    public set logTransferId(logTransferId: string  | undefined) {
        this['log_transfer_id'] = logTransferId;
    }
    public get logTransferId(): string | undefined {
        return this['log_transfer_id'];
    }
    public withLogTransferInfo(logTransferInfo: UpdateTransferRequestBodyLogTransferInfo): UpdateTransferRequestBody {
        this['log_transfer_info'] = logTransferInfo;
        return this;
    }
    public set logTransferInfo(logTransferInfo: UpdateTransferRequestBodyLogTransferInfo  | undefined) {
        this['log_transfer_info'] = logTransferInfo;
    }
    public get logTransferInfo(): UpdateTransferRequestBodyLogTransferInfo | undefined {
        return this['log_transfer_info'];
    }
}