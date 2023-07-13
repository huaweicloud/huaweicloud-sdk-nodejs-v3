import { CreateTransferRequestBodyLogStreams } from './CreateTransferRequestBodyLogStreams';
import { CreateTransferRequestBodyLogTransferInfo } from './CreateTransferRequestBodyLogTransferInfo';


export class CreateTransferRequestBody {
    private 'log_group_id': string | undefined;
    private 'log_streams': Array<CreateTransferRequestBodyLogStreams> | undefined;
    private 'log_transfer_info': CreateTransferRequestBodyLogTransferInfo | undefined;
    public constructor(logGroupId?: any, logStreams?: any, logTransferInfo?: any) { 
        this['log_group_id'] = logGroupId;
        this['log_streams'] = logStreams;
        this['log_transfer_info'] = logTransferInfo;
    }
    public withLogGroupId(logGroupId: string): CreateTransferRequestBody {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogStreams(logStreams: Array<CreateTransferRequestBodyLogStreams>): CreateTransferRequestBody {
        this['log_streams'] = logStreams;
        return this;
    }
    public set logStreams(logStreams: Array<CreateTransferRequestBodyLogStreams> | undefined) {
        this['log_streams'] = logStreams;
    }
    public get logStreams() {
        return this['log_streams'];
    }
    public withLogTransferInfo(logTransferInfo: CreateTransferRequestBodyLogTransferInfo): CreateTransferRequestBody {
        this['log_transfer_info'] = logTransferInfo;
        return this;
    }
    public set logTransferInfo(logTransferInfo: CreateTransferRequestBodyLogTransferInfo | undefined) {
        this['log_transfer_info'] = logTransferInfo;
    }
    public get logTransferInfo() {
        return this['log_transfer_info'];
    }
}