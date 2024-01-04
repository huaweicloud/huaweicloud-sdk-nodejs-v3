

export class AuditResultAdminAuditResult {
    public message?: string;
    private 'attachment_name'?: string;
    private 'attachment_url'?: string;
    private 'audit_time'?: number;
    public constructor() { 
    }
    public withMessage(message: string): AuditResultAdminAuditResult {
        this['message'] = message;
        return this;
    }
    public withAttachmentName(attachmentName: string): AuditResultAdminAuditResult {
        this['attachment_name'] = attachmentName;
        return this;
    }
    public set attachmentName(attachmentName: string  | undefined) {
        this['attachment_name'] = attachmentName;
    }
    public get attachmentName(): string | undefined {
        return this['attachment_name'];
    }
    public withAttachmentUrl(attachmentUrl: string): AuditResultAdminAuditResult {
        this['attachment_url'] = attachmentUrl;
        return this;
    }
    public set attachmentUrl(attachmentUrl: string  | undefined) {
        this['attachment_url'] = attachmentUrl;
    }
    public get attachmentUrl(): string | undefined {
        return this['attachment_url'];
    }
    public withAuditTime(auditTime: number): AuditResultAdminAuditResult {
        this['audit_time'] = auditTime;
        return this;
    }
    public set auditTime(auditTime: number  | undefined) {
        this['audit_time'] = auditTime;
    }
    public get auditTime(): number | undefined {
        return this['audit_time'];
    }
}