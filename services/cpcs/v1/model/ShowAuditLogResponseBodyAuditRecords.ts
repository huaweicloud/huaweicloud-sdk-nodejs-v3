

export class ShowAuditLogResponseBodyAuditRecords {
    public id?: string;
    private 'tenant_id'?: string;
    private 'cluster_id'?: string;
    private 'cluster_type'?: string;
    public operation?: string;
    public time?: number;
    public status?: string;
    private 'failure_message'?: string;
    public verification?: string;
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
    public withStatus(status: string): ShowAuditLogResponseBodyAuditRecords {
        this['status'] = status;
        return this;
    }
    public withFailureMessage(failureMessage: string): ShowAuditLogResponseBodyAuditRecords {
        this['failure_message'] = failureMessage;
        return this;
    }
    public set failureMessage(failureMessage: string  | undefined) {
        this['failure_message'] = failureMessage;
    }
    public get failureMessage(): string | undefined {
        return this['failure_message'];
    }
    public withVerification(verification: string): ShowAuditLogResponseBodyAuditRecords {
        this['verification'] = verification;
        return this;
    }
}