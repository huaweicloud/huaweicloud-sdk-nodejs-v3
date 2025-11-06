import { LogStreams } from './LogStreams';
import { UpdateTransferRequestBodyLogTransferInfo } from './UpdateTransferRequestBodyLogTransferInfo';


export class UpdateTransferRequestBody {
    private 'log_transfer_id'?: string;
    private 'log_group_id'?: string;
    private 'log_transfer_info'?: UpdateTransferRequestBodyLogTransferInfo;
    private 'log_streams'?: Array<LogStreams>;
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
    public withLogGroupId(logGroupId: string): UpdateTransferRequestBody {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
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
    public withLogStreams(logStreams: Array<LogStreams>): UpdateTransferRequestBody {
        this['log_streams'] = logStreams;
        return this;
    }
    public set logStreams(logStreams: Array<LogStreams>  | undefined) {
        this['log_streams'] = logStreams;
    }
    public get logStreams(): Array<LogStreams> | undefined {
        return this['log_streams'];
    }
}