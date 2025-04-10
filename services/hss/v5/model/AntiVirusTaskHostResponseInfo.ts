

export class AntiVirusTaskHostResponseInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'asset_value'?: string;
    private 'start_time'?: number;
    private 'run_duration'?: number;
    private 'scan_progress'?: string;
    private 'virus_num'?: number;
    private 'scan_file_num'?: number;
    private 'host_task_status'?: string;
    private 'fail_reason'?: string;
    public deleted?: boolean;
    private 'whether_using_quota'?: number;
    private 'agent_id'?: string;
    private 'os_type'?: string;
    private 'host_status'?: string;
    private 'agent_status'?: string;
    private 'protect_status'?: string;
    private 'os_name'?: string;
    private 'os_version'?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): AntiVirusTaskHostResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): AntiVirusTaskHostResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): AntiVirusTaskHostResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): AntiVirusTaskHostResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withAssetValue(assetValue: string): AntiVirusTaskHostResponseInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withStartTime(startTime: number): AntiVirusTaskHostResponseInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withRunDuration(runDuration: number): AntiVirusTaskHostResponseInfo {
        this['run_duration'] = runDuration;
        return this;
    }
    public set runDuration(runDuration: number  | undefined) {
        this['run_duration'] = runDuration;
    }
    public get runDuration(): number | undefined {
        return this['run_duration'];
    }
    public withScanProgress(scanProgress: string): AntiVirusTaskHostResponseInfo {
        this['scan_progress'] = scanProgress;
        return this;
    }
    public set scanProgress(scanProgress: string  | undefined) {
        this['scan_progress'] = scanProgress;
    }
    public get scanProgress(): string | undefined {
        return this['scan_progress'];
    }
    public withVirusNum(virusNum: number): AntiVirusTaskHostResponseInfo {
        this['virus_num'] = virusNum;
        return this;
    }
    public set virusNum(virusNum: number  | undefined) {
        this['virus_num'] = virusNum;
    }
    public get virusNum(): number | undefined {
        return this['virus_num'];
    }
    public withScanFileNum(scanFileNum: number): AntiVirusTaskHostResponseInfo {
        this['scan_file_num'] = scanFileNum;
        return this;
    }
    public set scanFileNum(scanFileNum: number  | undefined) {
        this['scan_file_num'] = scanFileNum;
    }
    public get scanFileNum(): number | undefined {
        return this['scan_file_num'];
    }
    public withHostTaskStatus(hostTaskStatus: string): AntiVirusTaskHostResponseInfo {
        this['host_task_status'] = hostTaskStatus;
        return this;
    }
    public set hostTaskStatus(hostTaskStatus: string  | undefined) {
        this['host_task_status'] = hostTaskStatus;
    }
    public get hostTaskStatus(): string | undefined {
        return this['host_task_status'];
    }
    public withFailReason(failReason: string): AntiVirusTaskHostResponseInfo {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withDeleted(deleted: boolean): AntiVirusTaskHostResponseInfo {
        this['deleted'] = deleted;
        return this;
    }
    public withWhetherUsingQuota(whetherUsingQuota: number): AntiVirusTaskHostResponseInfo {
        this['whether_using_quota'] = whetherUsingQuota;
        return this;
    }
    public set whetherUsingQuota(whetherUsingQuota: number  | undefined) {
        this['whether_using_quota'] = whetherUsingQuota;
    }
    public get whetherUsingQuota(): number | undefined {
        return this['whether_using_quota'];
    }
    public withAgentId(agentId: string): AntiVirusTaskHostResponseInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withOsType(osType: string): AntiVirusTaskHostResponseInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withHostStatus(hostStatus: string): AntiVirusTaskHostResponseInfo {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withAgentStatus(agentStatus: string): AntiVirusTaskHostResponseInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withProtectStatus(protectStatus: string): AntiVirusTaskHostResponseInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withOsName(osName: string): AntiVirusTaskHostResponseInfo {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withOsVersion(osVersion: string): AntiVirusTaskHostResponseInfo {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
}