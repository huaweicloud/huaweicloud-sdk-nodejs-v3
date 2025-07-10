import { TransferBackupResponseBodyResults } from './TransferBackupResponseBodyResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class TransferBackupResponse extends SdkResponse {
    public results?: Array<TransferBackupResponseBodyResults>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<TransferBackupResponseBodyResults>): TransferBackupResponse {
        this['results'] = results;
        return this;
    }
}