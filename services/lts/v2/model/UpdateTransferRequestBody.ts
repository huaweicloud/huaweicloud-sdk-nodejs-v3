import { UpdateTransferRequestBodyLogTransferInfo } from './UpdateTransferRequestBodyLogTransferInfo';


export class UpdateTransferRequestBody {
    private 'log_transfer_id': string | undefined;
    private 'log_transfer_info': UpdateTransferRequestBodyLogTransferInfo | undefined;
    public constructor(logTransferId?: any, logTransferInfo?: any) { 
        this['log_transfer_id'] = logTransferId;
        this['log_transfer_info'] = logTransferInfo;
    }
    public withLogTransferId(logTransferId: string): UpdateTransferRequestBody {
        this['log_transfer_id'] = logTransferId;
        return this;
    }
    public set logTransferId(logTransferId: string | undefined) {
        this['log_transfer_id'] = logTransferId;
    }
    public get logTransferId() {
        return this['log_transfer_id'];
    }
    public withLogTransferInfo(logTransferInfo: UpdateTransferRequestBodyLogTransferInfo): UpdateTransferRequestBody {
        this['log_transfer_info'] = logTransferInfo;
        return this;
    }
    public set logTransferInfo(logTransferInfo: UpdateTransferRequestBodyLogTransferInfo | undefined) {
        this['log_transfer_info'] = logTransferInfo;
    }
    public get logTransferInfo() {
        return this['log_transfer_info'];
    }
}