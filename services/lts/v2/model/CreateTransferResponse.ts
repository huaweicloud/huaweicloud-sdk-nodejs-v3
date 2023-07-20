import { CreateTransferResponseBodyLogStreams } from './CreateTransferResponseBodyLogStreams';
import { CreateTransferResponseBodyLogTransferInfo } from './CreateTransferResponseBodyLogTransferInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTransferResponse extends SdkResponse {
    private 'log_group_id'?: string;
    private 'log_group_name'?: string;
    private 'log_streams'?: Array<CreateTransferResponseBodyLogStreams>;
    private 'log_transfer_id'?: string;
    private 'log_transfer_info'?: CreateTransferResponseBodyLogTransferInfo;
    public constructor() { 
        super();
    }
    public withLogGroupId(logGroupId: string): CreateTransferResponse {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): CreateTransferResponse {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogStreams(logStreams: Array<CreateTransferResponseBodyLogStreams>): CreateTransferResponse {
        this['log_streams'] = logStreams;
        return this;
    }
    public set logStreams(logStreams: Array<CreateTransferResponseBodyLogStreams>  | undefined) {
        this['log_streams'] = logStreams;
    }
    public get logStreams(): Array<CreateTransferResponseBodyLogStreams> | undefined {
        return this['log_streams'];
    }
    public withLogTransferId(logTransferId: string): CreateTransferResponse {
        this['log_transfer_id'] = logTransferId;
        return this;
    }
    public set logTransferId(logTransferId: string  | undefined) {
        this['log_transfer_id'] = logTransferId;
    }
    public get logTransferId(): string | undefined {
        return this['log_transfer_id'];
    }
    public withLogTransferInfo(logTransferInfo: CreateTransferResponseBodyLogTransferInfo): CreateTransferResponse {
        this['log_transfer_info'] = logTransferInfo;
        return this;
    }
    public set logTransferInfo(logTransferInfo: CreateTransferResponseBodyLogTransferInfo  | undefined) {
        this['log_transfer_info'] = logTransferInfo;
    }
    public get logTransferInfo(): CreateTransferResponseBodyLogTransferInfo | undefined {
        return this['log_transfer_info'];
    }
}