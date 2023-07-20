import { CreateTransferResponseBody } from './CreateTransferResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTransfersResponse extends SdkResponse {
    private 'log_transfers'?: Array<CreateTransferResponseBody>;
    public constructor() { 
        super();
    }
    public withLogTransfers(logTransfers: Array<CreateTransferResponseBody>): ListTransfersResponse {
        this['log_transfers'] = logTransfers;
        return this;
    }
    public set logTransfers(logTransfers: Array<CreateTransferResponseBody>  | undefined) {
        this['log_transfers'] = logTransfers;
    }
    public get logTransfers(): Array<CreateTransferResponseBody> | undefined {
        return this['log_transfers'];
    }
}