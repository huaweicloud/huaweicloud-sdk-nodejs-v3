

export class ExportSecurityCheckInfoResponseInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_public_ip'?: string;
    private 'host_private_ip'?: string;
    private 'check_type'?: string;
    private 'check_name'?: string;
    public standard?: string;
    private 'check_rule_name'?: string;
    private 'executable_file_path'?: string;
    public severity?: string;
    private 'scan_result'?: string;
    public status?: string;
    private 'check_rule_desc'?: string;
    public audit?: string;
    public remediation?: string;
    private 'check_info_list'?: string;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withHostId(hostId: string): ExportSecurityCheckInfoResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): ExportSecurityCheckInfoResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostPublicIp(hostPublicIp: string): ExportSecurityCheckInfoResponseInfo {
        this['host_public_ip'] = hostPublicIp;
        return this;
    }
    public set hostPublicIp(hostPublicIp: string  | undefined) {
        this['host_public_ip'] = hostPublicIp;
    }
    public get hostPublicIp(): string | undefined {
        return this['host_public_ip'];
    }
    public withHostPrivateIp(hostPrivateIp: string): ExportSecurityCheckInfoResponseInfo {
        this['host_private_ip'] = hostPrivateIp;
        return this;
    }
    public set hostPrivateIp(hostPrivateIp: string  | undefined) {
        this['host_private_ip'] = hostPrivateIp;
    }
    public get hostPrivateIp(): string | undefined {
        return this['host_private_ip'];
    }
    public withCheckType(checkType: string): ExportSecurityCheckInfoResponseInfo {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withCheckName(checkName: string): ExportSecurityCheckInfoResponseInfo {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withStandard(standard: string): ExportSecurityCheckInfoResponseInfo {
        this['standard'] = standard;
        return this;
    }
    public withCheckRuleName(checkRuleName: string): ExportSecurityCheckInfoResponseInfo {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withExecutableFilePath(executableFilePath: string): ExportSecurityCheckInfoResponseInfo {
        this['executable_file_path'] = executableFilePath;
        return this;
    }
    public set executableFilePath(executableFilePath: string  | undefined) {
        this['executable_file_path'] = executableFilePath;
    }
    public get executableFilePath(): string | undefined {
        return this['executable_file_path'];
    }
    public withSeverity(severity: string): ExportSecurityCheckInfoResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withScanResult(scanResult: string): ExportSecurityCheckInfoResponseInfo {
        this['scan_result'] = scanResult;
        return this;
    }
    public set scanResult(scanResult: string  | undefined) {
        this['scan_result'] = scanResult;
    }
    public get scanResult(): string | undefined {
        return this['scan_result'];
    }
    public withStatus(status: string): ExportSecurityCheckInfoResponseInfo {
        this['status'] = status;
        return this;
    }
    public withCheckRuleDesc(checkRuleDesc: string): ExportSecurityCheckInfoResponseInfo {
        this['check_rule_desc'] = checkRuleDesc;
        return this;
    }
    public set checkRuleDesc(checkRuleDesc: string  | undefined) {
        this['check_rule_desc'] = checkRuleDesc;
    }
    public get checkRuleDesc(): string | undefined {
        return this['check_rule_desc'];
    }
    public withAudit(audit: string): ExportSecurityCheckInfoResponseInfo {
        this['audit'] = audit;
        return this;
    }
    public withRemediation(remediation: string): ExportSecurityCheckInfoResponseInfo {
        this['remediation'] = remediation;
        return this;
    }
    public withCheckInfoList(checkInfoList: string): ExportSecurityCheckInfoResponseInfo {
        this['check_info_list'] = checkInfoList;
        return this;
    }
    public set checkInfoList(checkInfoList: string  | undefined) {
        this['check_info_list'] = checkInfoList;
    }
    public get checkInfoList(): string | undefined {
        return this['check_info_list'];
    }
    public withCreateTime(createTime: number): ExportSecurityCheckInfoResponseInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}