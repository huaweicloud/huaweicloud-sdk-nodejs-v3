

export class SecurityCheckRuleHostResponseInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'check_name'?: string;
    private 'baseline_name'?: string;
    private 'host_public_ip'?: string;
    private 'host_private_ip'?: string;
    private 'scan_time'?: number;
    private 'failed_num'?: number;
    private 'passed_num'?: number;
    private 'diff_description'?: string;
    public description?: string;
    private 'host_type'?: string;
    private 'enable_fix'?: number;
    private 'enable_verify'?: boolean;
    private 'enable_click'?: boolean;
    private 'cancel_ignore_enable_click'?: boolean;
    private 'result_type'?: string;
    private 'fix_failed_reason'?: string;
    private 'cluster_id'?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): SecurityCheckRuleHostResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): SecurityCheckRuleHostResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withCheckName(checkName: string): SecurityCheckRuleHostResponseInfo {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withBaselineName(baselineName: string): SecurityCheckRuleHostResponseInfo {
        this['baseline_name'] = baselineName;
        return this;
    }
    public set baselineName(baselineName: string  | undefined) {
        this['baseline_name'] = baselineName;
    }
    public get baselineName(): string | undefined {
        return this['baseline_name'];
    }
    public withHostPublicIp(hostPublicIp: string): SecurityCheckRuleHostResponseInfo {
        this['host_public_ip'] = hostPublicIp;
        return this;
    }
    public set hostPublicIp(hostPublicIp: string  | undefined) {
        this['host_public_ip'] = hostPublicIp;
    }
    public get hostPublicIp(): string | undefined {
        return this['host_public_ip'];
    }
    public withHostPrivateIp(hostPrivateIp: string): SecurityCheckRuleHostResponseInfo {
        this['host_private_ip'] = hostPrivateIp;
        return this;
    }
    public set hostPrivateIp(hostPrivateIp: string  | undefined) {
        this['host_private_ip'] = hostPrivateIp;
    }
    public get hostPrivateIp(): string | undefined {
        return this['host_private_ip'];
    }
    public withScanTime(scanTime: number): SecurityCheckRuleHostResponseInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withFailedNum(failedNum: number): SecurityCheckRuleHostResponseInfo {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number  | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum(): number | undefined {
        return this['failed_num'];
    }
    public withPassedNum(passedNum: number): SecurityCheckRuleHostResponseInfo {
        this['passed_num'] = passedNum;
        return this;
    }
    public set passedNum(passedNum: number  | undefined) {
        this['passed_num'] = passedNum;
    }
    public get passedNum(): number | undefined {
        return this['passed_num'];
    }
    public withDiffDescription(diffDescription: string): SecurityCheckRuleHostResponseInfo {
        this['diff_description'] = diffDescription;
        return this;
    }
    public set diffDescription(diffDescription: string  | undefined) {
        this['diff_description'] = diffDescription;
    }
    public get diffDescription(): string | undefined {
        return this['diff_description'];
    }
    public withDescription(description: string): SecurityCheckRuleHostResponseInfo {
        this['description'] = description;
        return this;
    }
    public withHostType(hostType: string): SecurityCheckRuleHostResponseInfo {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withEnableFix(enableFix: number): SecurityCheckRuleHostResponseInfo {
        this['enable_fix'] = enableFix;
        return this;
    }
    public set enableFix(enableFix: number  | undefined) {
        this['enable_fix'] = enableFix;
    }
    public get enableFix(): number | undefined {
        return this['enable_fix'];
    }
    public withEnableVerify(enableVerify: boolean): SecurityCheckRuleHostResponseInfo {
        this['enable_verify'] = enableVerify;
        return this;
    }
    public set enableVerify(enableVerify: boolean  | undefined) {
        this['enable_verify'] = enableVerify;
    }
    public get enableVerify(): boolean | undefined {
        return this['enable_verify'];
    }
    public withEnableClick(enableClick: boolean): SecurityCheckRuleHostResponseInfo {
        this['enable_click'] = enableClick;
        return this;
    }
    public set enableClick(enableClick: boolean  | undefined) {
        this['enable_click'] = enableClick;
    }
    public get enableClick(): boolean | undefined {
        return this['enable_click'];
    }
    public withCancelIgnoreEnableClick(cancelIgnoreEnableClick: boolean): SecurityCheckRuleHostResponseInfo {
        this['cancel_ignore_enable_click'] = cancelIgnoreEnableClick;
        return this;
    }
    public set cancelIgnoreEnableClick(cancelIgnoreEnableClick: boolean  | undefined) {
        this['cancel_ignore_enable_click'] = cancelIgnoreEnableClick;
    }
    public get cancelIgnoreEnableClick(): boolean | undefined {
        return this['cancel_ignore_enable_click'];
    }
    public withResultType(resultType: string): SecurityCheckRuleHostResponseInfo {
        this['result_type'] = resultType;
        return this;
    }
    public set resultType(resultType: string  | undefined) {
        this['result_type'] = resultType;
    }
    public get resultType(): string | undefined {
        return this['result_type'];
    }
    public withFixFailedReason(fixFailedReason: string): SecurityCheckRuleHostResponseInfo {
        this['fix_failed_reason'] = fixFailedReason;
        return this;
    }
    public set fixFailedReason(fixFailedReason: string  | undefined) {
        this['fix_failed_reason'] = fixFailedReason;
    }
    public get fixFailedReason(): string | undefined {
        return this['fix_failed_reason'];
    }
    public withClusterId(clusterId: string): SecurityCheckRuleHostResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}