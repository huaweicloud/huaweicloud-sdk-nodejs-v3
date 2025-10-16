

export class ShowAuditLogResponseBodyAuditRecords {
    public id?: string;
    private 'tenant_id'?: string;
    private 'cluster_id'?: string;
    private 'cluster_type'?: string;
    public operation?: string;
    public time?: number;
    private 'operate_status'?: number;
    private 'operate_message'?: string;
    private 'audit_status'?: number;
    public constructor() { 
    }
    public withId(id: string): ShowAuditLogResponseBodyAuditRecords {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): ShowAuditLogResponseBodyAuditRecords {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withClusterId(clusterId: string): ShowAuditLogResponseBodyAuditRecords {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): ShowAuditLogResponseBodyAuditRecords {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withOperation(operation: string): ShowAuditLogResponseBodyAuditRecords {
        this['operation'] = operation;
        return this;
    }
    public withTime(time: number): ShowAuditLogResponseBodyAuditRecords {
        this['time'] = time;
        return this;
    }
    public withOperateStatus(operateStatus: number): ShowAuditLogResponseBodyAuditRecords {
        this['operate_status'] = operateStatus;
        return this;
    }
    public set operateStatus(operateStatus: number  | undefined) {
        this['operate_status'] = operateStatus;
    }
    public get operateStatus(): number | undefined {
        return this['operate_status'];
    }
    public withOperateMessage(operateMessage: string): ShowAuditLogResponseBodyAuditRecords {
        this['operate_message'] = operateMessage;
        return this;
    }
    public set operateMessage(operateMessage: string  | undefined) {
        this['operate_message'] = operateMessage;
    }
    public get operateMessage(): string | undefined {
        return this['operate_message'];
    }
    public withAuditStatus(auditStatus: number): ShowAuditLogResponseBodyAuditRecords {
        this['audit_status'] = auditStatus;
        return this;
    }
    public set auditStatus(auditStatus: number  | undefined) {
        this['audit_status'] = auditStatus;
    }
    public get auditStatus(): number | undefined {
        return this['audit_status'];
    }
}