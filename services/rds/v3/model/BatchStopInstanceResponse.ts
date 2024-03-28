import { ShutdownInstanceRecord } from './ShutdownInstanceRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchStopInstanceResponse extends SdkResponse {
    public records?: Array<ShutdownInstanceRecord>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withRecords(records: Array<ShutdownInstanceRecord>): BatchStopInstanceResponse {
        this['records'] = records;
        return this;
    }
    public withXRequestId(xRequestId: string): BatchStopInstanceResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}