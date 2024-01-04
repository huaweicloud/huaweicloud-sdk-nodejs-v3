import { AuditResultAdminAuditResult } from './AuditResultAdminAuditResult';
import { AuditResultSystemAuditResult } from './AuditResultSystemAuditResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobAuditResultResponse extends SdkResponse {
    private 'system_audit_result'?: AuditResultSystemAuditResult;
    private 'admin_audit_result'?: AuditResultAdminAuditResult;
    public constructor() { 
        super();
    }
    public withSystemAuditResult(systemAuditResult: AuditResultSystemAuditResult): ShowJobAuditResultResponse {
        this['system_audit_result'] = systemAuditResult;
        return this;
    }
    public set systemAuditResult(systemAuditResult: AuditResultSystemAuditResult  | undefined) {
        this['system_audit_result'] = systemAuditResult;
    }
    public get systemAuditResult(): AuditResultSystemAuditResult | undefined {
        return this['system_audit_result'];
    }
    public withAdminAuditResult(adminAuditResult: AuditResultAdminAuditResult): ShowJobAuditResultResponse {
        this['admin_audit_result'] = adminAuditResult;
        return this;
    }
    public set adminAuditResult(adminAuditResult: AuditResultAdminAuditResult  | undefined) {
        this['admin_audit_result'] = adminAuditResult;
    }
    public get adminAuditResult(): AuditResultAdminAuditResult | undefined {
        return this['admin_audit_result'];
    }
}