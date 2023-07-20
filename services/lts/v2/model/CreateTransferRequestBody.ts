import { CreateTransferRequestBodyLogStreams } from './CreateTransferRequestBodyLogStreams';
import { CreateTransferRequestBodyLogTransferInfo } from './CreateTransferRequestBodyLogTransferInfo';


export class CreateTransferRequestBody {
    private 'log_group_id'?: string;
    private 'log_streams'?: Array<CreateTransferRequestBodyLogStreams>;
    private 'log_transfer_info'?: CreateTransferRequestBodyLogTransferInfo;
    public constructor(logGroupId?: string, logStreams?: Array<CreateTransferRequestBodyLogStreams>, logTransferInfo?: CreateTransferRequestBodyLogTransferInfo) { 
        this['log_group_id'] = logGroupId;
        this['log_streams'] = logStreams;
        this['log_transfer_info'] = logTransferInfo;
    }
    public withLogGroupId(logGroupId: string): CreateTransferRequestBody {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreams(logStreams: Array<CreateTransferRequestBodyLogStreams>): CreateTransferRequestBody {
        this['log_streams'] = logStreams;
        return this;
    }
    public set logStreams(logStreams: Array<CreateTransferRequestBodyLogStreams>  | undefined) {
        this['log_streams'] = logStreams;
    }
    public get logStreams(): Array<CreateTransferRequestBodyLogStreams> | undefined {
        return this['log_streams'];
    }
    public withLogTransferInfo(logTransferInfo: CreateTransferRequestBodyLogTransferInfo): CreateTransferRequestBody {
        this['log_transfer_info'] = logTransferInfo;
        return this;
    }
    public set logTransferInfo(logTransferInfo: CreateTransferRequestBodyLogTransferInfo  | undefined) {
        this['log_transfer_info'] = logTransferInfo;
    }
    public get logTransferInfo(): CreateTransferRequestBodyLogTransferInfo | undefined {
        return this['log_transfer_info'];
    }
}