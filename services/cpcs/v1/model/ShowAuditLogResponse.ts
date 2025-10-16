import { ShowAuditLogResponseBodyAuditRecords } from './ShowAuditLogResponseBodyAuditRecords';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuditLogResponse extends SdkResponse {
    public total?: number;
    private 'audit_records'?: Array<ShowAuditLogResponseBodyAuditRecords>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowAuditLogResponse {
        this['total'] = total;
        return this;
    }
    public withAuditRecords(auditRecords: Array<ShowAuditLogResponseBodyAuditRecords>): ShowAuditLogResponse {
        this['audit_records'] = auditRecords;
        return this;
    }
    public set auditRecords(auditRecords: Array<ShowAuditLogResponseBodyAuditRecords>  | undefined) {
        this['audit_records'] = auditRecords;
    }
    public get auditRecords(): Array<ShowAuditLogResponseBodyAuditRecords> | undefined {
        return this['audit_records'];
    }
}