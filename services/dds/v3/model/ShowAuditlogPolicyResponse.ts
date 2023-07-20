
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuditlogPolicyResponse extends SdkResponse {
    private 'keep_days'?: number;
    private 'audit_scope'?: string;
    private 'audit_types'?: Array<string>;
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
    public withAuditScope(auditScope: string): ShowAuditlogPolicyResponse {
        this['audit_scope'] = auditScope;
        return this;
    }
    public set auditScope(auditScope: string  | undefined) {
        this['audit_scope'] = auditScope;
    }
    public get auditScope(): string | undefined {
        return this['audit_scope'];
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
}