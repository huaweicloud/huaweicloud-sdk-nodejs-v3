
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuditlogPolicyResponse extends SdkResponse {
    private 'keep_days'?: number;
    private 'audit_types'?: Array<string>;
    private 'all_audit_log_action'?: string;
    public constructor() { 
        super();
    }
    public withKeepDays(keepDays: number): ShowAuditlogPolicyResponse {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
    public withAuditTypes(auditTypes: Array<string>): ShowAuditlogPolicyResponse {
        this['audit_types'] = auditTypes;
        return this;
    }
    public set auditTypes(auditTypes: Array<string>  | undefined) {
        this['audit_types'] = auditTypes;
    }
    public get auditTypes(): Array<string> | undefined {
        return this['audit_types'];
    }
    public withAllAuditLogAction(allAuditLogAction: string): ShowAuditlogPolicyResponse {
        this['all_audit_log_action'] = allAuditLogAction;
        return this;
    }
    public set allAuditLogAction(allAuditLogAction: string  | undefined) {
        this['all_audit_log_action'] = allAuditLogAction;
    }
    public get allAuditLogAction(): string | undefined {
        return this['all_audit_log_action'];
    }
}