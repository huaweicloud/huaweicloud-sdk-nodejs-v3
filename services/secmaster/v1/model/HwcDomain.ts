import { HwcDomainContact } from './HwcDomainContact';


export class HwcDomain {
    private 'domain_name'?: string;
    private 'expire_date'?: string;
    public status?: string;
    private 'audit_status'?: string;
    private 'audit_unpass_reason'?: string;
    private 'transfer_status'?: string;
    private 'reg_type'?: string;
    private 'privacy_protection'?: string;
    private 'name_server'?: Array<string>;
    private 'credential_type'?: string;
    private 'credential_id'?: string;
    public registrar?: string;
    public contact?: Array<HwcDomainContact>;
    public constructor(domainName?: string, expireDate?: string, status?: string, auditStatus?: string, auditUnpassReason?: string, regType?: string, privacyProtection?: string, nameServer?: Array<string>, credentialType?: string, credentialId?: string, registrar?: string, contact?: Array<HwcDomainContact>) { 
        this['domain_name'] = domainName;
        this['expire_date'] = expireDate;
        this['status'] = status;
        this['audit_status'] = auditStatus;
        this['audit_unpass_reason'] = auditUnpassReason;
        this['reg_type'] = regType;
        this['privacy_protection'] = privacyProtection;
        this['name_server'] = nameServer;
        this['credential_type'] = credentialType;
        this['credential_id'] = credentialId;
        this['registrar'] = registrar;
        this['contact'] = contact;
    }
    public withDomainName(domainName: string): HwcDomain {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withExpireDate(expireDate: string): HwcDomain {
        this['expire_date'] = expireDate;
        return this;
    }
    public set expireDate(expireDate: string  | undefined) {
        this['expire_date'] = expireDate;
    }
    public get expireDate(): string | undefined {
        return this['expire_date'];
    }
    public withStatus(status: string): HwcDomain {
        this['status'] = status;
        return this;
    }
    public withAuditStatus(auditStatus: string): HwcDomain {
        this['audit_status'] = auditStatus;
        return this;
    }
    public set auditStatus(auditStatus: string  | undefined) {
        this['audit_status'] = auditStatus;
    }
    public get auditStatus(): string | undefined {
        return this['audit_status'];
    }
    public withAuditUnpassReason(auditUnpassReason: string): HwcDomain {
        this['audit_unpass_reason'] = auditUnpassReason;
        return this;
    }
    public set auditUnpassReason(auditUnpassReason: string  | undefined) {
        this['audit_unpass_reason'] = auditUnpassReason;
    }
    public get auditUnpassReason(): string | undefined {
        return this['audit_unpass_reason'];
    }
    public withTransferStatus(transferStatus: string): HwcDomain {
        this['transfer_status'] = transferStatus;
        return this;
    }
    public set transferStatus(transferStatus: string  | undefined) {
        this['transfer_status'] = transferStatus;
    }
    public get transferStatus(): string | undefined {
        return this['transfer_status'];
    }
    public withRegType(regType: string): HwcDomain {
        this['reg_type'] = regType;
        return this;
    }
    public set regType(regType: string  | undefined) {
        this['reg_type'] = regType;
    }
    public get regType(): string | undefined {
        return this['reg_type'];
    }
    public withPrivacyProtection(privacyProtection: string): HwcDomain {
        this['privacy_protection'] = privacyProtection;
        return this;
    }
    public set privacyProtection(privacyProtection: string  | undefined) {
        this['privacy_protection'] = privacyProtection;
    }
    public get privacyProtection(): string | undefined {
        return this['privacy_protection'];
    }
    public withNameServer(nameServer: Array<string>): HwcDomain {
        this['name_server'] = nameServer;
        return this;
    }
    public set nameServer(nameServer: Array<string>  | undefined) {
        this['name_server'] = nameServer;
    }
    public get nameServer(): Array<string> | undefined {
        return this['name_server'];
    }
    public withCredentialType(credentialType: string): HwcDomain {
        this['credential_type'] = credentialType;
        return this;
    }
    public set credentialType(credentialType: string  | undefined) {
        this['credential_type'] = credentialType;
    }
    public get credentialType(): string | undefined {
        return this['credential_type'];
    }
    public withCredentialId(credentialId: string): HwcDomain {
        this['credential_id'] = credentialId;
        return this;
    }
    public set credentialId(credentialId: string  | undefined) {
        this['credential_id'] = credentialId;
    }
    public get credentialId(): string | undefined {
        return this['credential_id'];
    }
    public withRegistrar(registrar: string): HwcDomain {
        this['registrar'] = registrar;
        return this;
    }
    public withContact(contact: Array<HwcDomainContact>): HwcDomain {
        this['contact'] = contact;
        return this;
    }
}