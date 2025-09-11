import { UnSupportAuditInfo } from './UnSupportAuditInfo';


export class UnSupportAuditInfoResponse {
    private 'audit_infos'?: Array<UnSupportAuditInfo>;
    private 'support_version'?: string;
    public constructor() { 
    }
    public withAuditInfos(auditInfos: Array<UnSupportAuditInfo>): UnSupportAuditInfoResponse {
        this['audit_infos'] = auditInfos;
        return this;
    }
    public set auditInfos(auditInfos: Array<UnSupportAuditInfo>  | undefined) {
        this['audit_infos'] = auditInfos;
    }
    public get auditInfos(): Array<UnSupportAuditInfo> | undefined {
        return this['audit_infos'];
    }
    public withSupportVersion(supportVersion: string): UnSupportAuditInfoResponse {
        this['support_version'] = supportVersion;
        return this;
    }
    public set supportVersion(supportVersion: string  | undefined) {
        this['support_version'] = supportVersion;
    }
    public get supportVersion(): string | undefined {
        return this['support_version'];
    }
}