

export class SecurityCheckInfoResponseInfo {
    public severity?: string;
    private 'check_name'?: string;
    private 'check_type'?: string;
    public standard?: string;
    private 'executable_file_path'?: string;
    private 'check_rule_num'?: number;
    private 'failed_rule_num'?: number;
    private 'host_num'?: number;
    private 'scan_time'?: number;
    private 'check_type_desc'?: string;
    public constructor() { 
    }
    public withSeverity(severity: string): SecurityCheckInfoResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withCheckName(checkName: string): SecurityCheckInfoResponseInfo {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withCheckType(checkType: string): SecurityCheckInfoResponseInfo {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withStandard(standard: string): SecurityCheckInfoResponseInfo {
        this['standard'] = standard;
        return this;
    }
    public withExecutableFilePath(executableFilePath: string): SecurityCheckInfoResponseInfo {
        this['executable_file_path'] = executableFilePath;
        return this;
    }
    public set executableFilePath(executableFilePath: string  | undefined) {
        this['executable_file_path'] = executableFilePath;
    }
    public get executableFilePath(): string | undefined {
        return this['executable_file_path'];
    }
    public withCheckRuleNum(checkRuleNum: number): SecurityCheckInfoResponseInfo {
        this['check_rule_num'] = checkRuleNum;
        return this;
    }
    public set checkRuleNum(checkRuleNum: number  | undefined) {
        this['check_rule_num'] = checkRuleNum;
    }
    public get checkRuleNum(): number | undefined {
        return this['check_rule_num'];
    }
    public withFailedRuleNum(failedRuleNum: number): SecurityCheckInfoResponseInfo {
        this['failed_rule_num'] = failedRuleNum;
        return this;
    }
    public set failedRuleNum(failedRuleNum: number  | undefined) {
        this['failed_rule_num'] = failedRuleNum;
    }
    public get failedRuleNum(): number | undefined {
        return this['failed_rule_num'];
    }
    public withHostNum(hostNum: number): SecurityCheckInfoResponseInfo {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withScanTime(scanTime: number): SecurityCheckInfoResponseInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withCheckTypeDesc(checkTypeDesc: string): SecurityCheckInfoResponseInfo {
        this['check_type_desc'] = checkTypeDesc;
        return this;
    }
    public set checkTypeDesc(checkTypeDesc: string  | undefined) {
        this['check_type_desc'] = checkTypeDesc;
    }
    public get checkTypeDesc(): string | undefined {
        return this['check_type_desc'];
    }
}