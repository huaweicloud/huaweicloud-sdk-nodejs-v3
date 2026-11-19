

export class VulHandleTaskDetailResponseInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'asset_value'?: string;
    private 'vul_id'?: string;
    private 'vul_name'?: string;
    private 'handle_status'?: string;
    private 'failed_reason'?: string;
    private 'failed_reason_description'?: string;
    private 'failed_reason_solution'?: string;
    private 'app_name'?: string;
    private 'app_version'?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): VulHandleTaskDetailResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): VulHandleTaskDetailResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPublicIp(publicIp: string): VulHandleTaskDetailResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): VulHandleTaskDetailResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withAssetValue(assetValue: string): VulHandleTaskDetailResponseInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withVulId(vulId: string): VulHandleTaskDetailResponseInfo {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withVulName(vulName: string): VulHandleTaskDetailResponseInfo {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withHandleStatus(handleStatus: string): VulHandleTaskDetailResponseInfo {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withFailedReason(failedReason: string): VulHandleTaskDetailResponseInfo {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withFailedReasonDescription(failedReasonDescription: string): VulHandleTaskDetailResponseInfo {
        this['failed_reason_description'] = failedReasonDescription;
        return this;
    }
    public set failedReasonDescription(failedReasonDescription: string  | undefined) {
        this['failed_reason_description'] = failedReasonDescription;
    }
    public get failedReasonDescription(): string | undefined {
        return this['failed_reason_description'];
    }
    public withFailedReasonSolution(failedReasonSolution: string): VulHandleTaskDetailResponseInfo {
        this['failed_reason_solution'] = failedReasonSolution;
        return this;
    }
    public set failedReasonSolution(failedReasonSolution: string  | undefined) {
        this['failed_reason_solution'] = failedReasonSolution;
    }
    public get failedReasonSolution(): string | undefined {
        return this['failed_reason_solution'];
    }
    public withAppName(appName: string): VulHandleTaskDetailResponseInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppVersion(appVersion: string): VulHandleTaskDetailResponseInfo {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
}