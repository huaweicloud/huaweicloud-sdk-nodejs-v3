import { Auditlog } from './Auditlog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditlogsResponse extends SdkResponse {
    public auditlogs?: Array<Auditlog>;
    private 'total_record'?: number;
    public constructor() { 
        super();
    }
    public withAuditlogs(auditlogs: Array<Auditlog>): ListAuditlogsResponse {
        this['auditlogs'] = auditlogs;
        return this;
    }
    public withTotalRecord(totalRecord: number): ListAuditlogsResponse {
        this['total_record'] = totalRecord;
        return this;
    }
    public set totalRecord(totalRecord: number  | undefined) {
        this['total_record'] = totalRecord;
    }
    public get totalRecord(): number | undefined {
        return this['total_record'];
    }
}