import { CreateKeypairResponseBody } from './CreateKeypairResponseBody';
import { FailedKeypair } from './FailedKeypair';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchImportKeypairResponse extends SdkResponse {
    private 'failed_keypairs'?: Array<FailedKeypair>;
    private 'succeeded_keypairs'?: Array<CreateKeypairResponseBody>;
    public constructor() { 
        super();
    }
    public withFailedKeypairs(failedKeypairs: Array<FailedKeypair>): BatchImportKeypairResponse {
        this['failed_keypairs'] = failedKeypairs;
        return this;
    }
    public set failedKeypairs(failedKeypairs: Array<FailedKeypair>  | undefined) {
        this['failed_keypairs'] = failedKeypairs;
    }
    public get failedKeypairs(): Array<FailedKeypair> | undefined {
        return this['failed_keypairs'];
    }
    public withSucceededKeypairs(succeededKeypairs: Array<CreateKeypairResponseBody>): BatchImportKeypairResponse {
        this['succeeded_keypairs'] = succeededKeypairs;
        return this;
    }
    public set succeededKeypairs(succeededKeypairs: Array<CreateKeypairResponseBody>  | undefined) {
        this['succeeded_keypairs'] = succeededKeypairs;
    }
    public get succeededKeypairs(): Array<CreateKeypairResponseBody> | undefined {
        return this['succeeded_keypairs'];
    }
}