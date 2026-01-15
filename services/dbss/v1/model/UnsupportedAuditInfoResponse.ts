import { UnsupportedAuditInfo } from './UnsupportedAuditInfo';


export class UnsupportedAuditInfoResponse {
    private 'audit_infos'?: Array<UnsupportedAuditInfo>;
    private 'support_version'?: string;
    public constructor() { 
    }
    public withAuditInfos(auditInfos: Array<UnsupportedAuditInfo>): UnsupportedAuditInfoResponse {
        this['audit_infos'] = auditInfos;
        return this;
    }
    public set auditInfos(auditInfos: Array<UnsupportedAuditInfo>  | undefined) {
        this['audit_infos'] = auditInfos;
    }
    public get auditInfos(): Array<UnsupportedAuditInfo> | undefined {
        return this['audit_infos'];
    }
    public withSupportVersion(supportVersion: string): UnsupportedAuditInfoResponse {
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