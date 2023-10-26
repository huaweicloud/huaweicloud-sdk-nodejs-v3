import { SimpleKeyScanRecord } from './SimpleKeyScanRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowExpireKeyScanInfoResponse extends SdkResponse {
    public records?: Array<SimpleKeyScanRecord>;
    private 'instance_id'?: string;
    public total?: number;
    public count?: number;
    public constructor() { 
        super();
    }
    public withRecords(records: Array<SimpleKeyScanRecord>): ShowExpireKeyScanInfoResponse {
        this['records'] = records;
        return this;
    }
    public withInstanceId(instanceId: string): ShowExpireKeyScanInfoResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTotal(total: number): ShowExpireKeyScanInfoResponse {
        this['total'] = total;
        return this;
    }
    public withCount(count: number): ShowExpireKeyScanInfoResponse {
        this['count'] = count;
        return this;
    }
}