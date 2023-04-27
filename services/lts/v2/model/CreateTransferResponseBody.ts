import { CreateTransferResponseBodyLogStreams } from './CreateTransferResponseBodyLogStreams';
import { CreateTransferResponseBodyLogTransferInfo } from './CreateTransferResponseBodyLogTransferInfo';


export class CreateTransferResponseBody {
    private 'log_group_id': string | undefined;
    private 'log_group_name': string | undefined;
    private 'log_streams': Array<CreateTransferResponseBodyLogStreams> | undefined;
    private 'log_transfer_id': string | undefined;
    private 'log_transfer_info': CreateTransferResponseBodyLogTransferInfo | undefined;
    public constructor(logGroupId?: any, logGroupName?: any, logStreams?: any, logTransferId?: any, logTransferInfo?: any) { 
        this['log_group_id'] = logGroupId;
        this['log_group_name'] = logGroupName;
        this['log_streams'] = logStreams;
        this['log_transfer_id'] = logTransferId;
        this['log_transfer_info'] = logTransferInfo;
    }
    public withLogGroupId(logGroupId: string): CreateTransferResponseBody {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): CreateTransferResponseBody {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName() {
        return this['log_group_name'];
    }
    public withLogStreams(logStreams: Array<CreateTransferResponseBodyLogStreams>): CreateTransferResponseBody {
        this['log_streams'] = logStreams;
        return this;
    }
    public set logStreams(logStreams: Array<CreateTransferResponseBodyLogStreams> | undefined) {
        this['log_streams'] = logStreams;
    }
    public get logStreams() {
        return this['log_streams'];
    }
    public withLogTransferId(logTransferId: string): CreateTransferResponseBody {
        this['log_transfer_id'] = logTransferId;
        return this;
    }
    public set logTransferId(logTransferId: string | undefined) {
        this['log_transfer_id'] = logTransferId;
    }
    public get logTransferId() {
        return this['log_transfer_id'];
    }
    public withLogTransferInfo(logTransferInfo: CreateTransferResponseBodyLogTransferInfo): CreateTransferResponseBody {
        this['log_transfer_info'] = logTransferInfo;
        return this;
    }
    public set logTransferInfo(logTransferInfo: CreateTransferResponseBodyLogTransferInfo | undefined) {
        this['log_transfer_info'] = logTransferInfo;
    }
    public get logTransferInfo() {
        return this['log_transfer_info'];
    }
}