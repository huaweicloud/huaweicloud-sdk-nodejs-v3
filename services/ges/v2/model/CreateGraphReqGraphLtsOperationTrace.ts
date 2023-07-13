

export class CreateGraphReqGraphLtsOperationTrace {
    private 'enable_audit'?: boolean | undefined;
    private 'audit_log_group_name'?: string | undefined;
    public constructor() { 
    }
    public withEnableAudit(enableAudit: boolean): CreateGraphReqGraphLtsOperationTrace {
        this['enable_audit'] = enableAudit;
        return this;
    }
    public set enableAudit(enableAudit: boolean | undefined) {
        this['enable_audit'] = enableAudit;
    }
    public get enableAudit() {
        return this['enable_audit'];
    }
    public withAuditLogGroupName(auditLogGroupName: string): CreateGraphReqGraphLtsOperationTrace {
        this['audit_log_group_name'] = auditLogGroupName;
        return this;
    }
    public set auditLogGroupName(auditLogGroupName: string | undefined) {
        this['audit_log_group_name'] = auditLogGroupName;
    }
    public get auditLogGroupName() {
        return this['audit_log_group_name'];
    }
}