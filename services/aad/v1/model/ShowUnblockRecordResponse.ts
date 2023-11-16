import { UnblockRecordResponseUnblockRecord } from './UnblockRecordResponseUnblockRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUnblockRecordResponse extends SdkResponse {
    private 'unblock_record'?: Array<UnblockRecordResponseUnblockRecord>;
    public total?: number;
    private 'domain_id'?: string;
    public constructor() { 
        super();
    }
    public withUnblockRecord(unblockRecord: Array<UnblockRecordResponseUnblockRecord>): ShowUnblockRecordResponse {
        this['unblock_record'] = unblockRecord;
        return this;
    }
    public set unblockRecord(unblockRecord: Array<UnblockRecordResponseUnblockRecord>  | undefined) {
        this['unblock_record'] = unblockRecord;
    }
    public get unblockRecord(): Array<UnblockRecordResponseUnblockRecord> | undefined {
        return this['unblock_record'];
    }
    public withTotal(total: number): ShowUnblockRecordResponse {
        this['total'] = total;
        return this;
    }
    public withDomainId(domainId: string): ShowUnblockRecordResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
}