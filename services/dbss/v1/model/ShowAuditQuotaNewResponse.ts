
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuditQuotaNewResponse extends SdkResponse {
    private 'project_id'?: string;
    private 'audit_quota'?: number;
    public cpu?: number;
    public ram?: number;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): ShowAuditQuotaNewResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAuditQuota(auditQuota: number): ShowAuditQuotaNewResponse {
        this['audit_quota'] = auditQuota;
        return this;
    }
    public set auditQuota(auditQuota: number  | undefined) {
        this['audit_quota'] = auditQuota;
    }
    public get auditQuota(): number | undefined {
        return this['audit_quota'];
    }
    public withCpu(cpu: number): ShowAuditQuotaNewResponse {
        this['cpu'] = cpu;
        return this;
    }
    public withRam(ram: number): ShowAuditQuotaNewResponse {
        this['ram'] = ram;
        return this;
    }
}