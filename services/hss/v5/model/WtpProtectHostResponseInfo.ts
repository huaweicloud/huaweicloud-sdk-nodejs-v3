import { WtpRemoteBackupResponseInfo } from './WtpRemoteBackupResponseInfo';


export class WtpProtectHostResponseInfo {
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    public ipv6?: string;
    private 'group_name'?: string;
    private 'asset_value'?: string;
    private 'os_bit'?: string;
    private 'os_type'?: string;
    private 'protect_status'?: string;
    private 'rasp_protect_status'?: string;
    private 'anti_tampering_times'?: number;
    private 'detect_tampering_times'?: number;
    private 'last_detect_time'?: number;
    private 'scheduled_shutdown_status'?: string;
    private 'os_name'?: string;
    private 'os_version'?: string;
    private 'host_status'?: string;
    private 'agent_status'?: string;
    private 'protect_dir_num'?: number;
    private 'remote_backbup_info'?: WtpRemoteBackupResponseInfo;
    public constructor() { 
    }
    public withHostName(hostName: string): WtpProtectHostResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): WtpProtectHostResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPublicIp(publicIp: string): WtpProtectHostResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): WtpProtectHostResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withIpv6(ipv6: string): WtpProtectHostResponseInfo {
        this['ipv6'] = ipv6;
        return this;
    }
    public withGroupName(groupName: string): WtpProtectHostResponseInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withAssetValue(assetValue: string): WtpProtectHostResponseInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withOsBit(osBit: string): WtpProtectHostResponseInfo {
        this['os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: string  | undefined) {
        this['os_bit'] = osBit;
    }
    public get osBit(): string | undefined {
        return this['os_bit'];
    }
    public withOsType(osType: string): WtpProtectHostResponseInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withProtectStatus(protectStatus: string): WtpProtectHostResponseInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withRaspProtectStatus(raspProtectStatus: string): WtpProtectHostResponseInfo {
        this['rasp_protect_status'] = raspProtectStatus;
        return this;
    }
    public set raspProtectStatus(raspProtectStatus: string  | undefined) {
        this['rasp_protect_status'] = raspProtectStatus;
    }
    public get raspProtectStatus(): string | undefined {
        return this['rasp_protect_status'];
    }
    public withAntiTamperingTimes(antiTamperingTimes: number): WtpProtectHostResponseInfo {
        this['anti_tampering_times'] = antiTamperingTimes;
        return this;
    }
    public set antiTamperingTimes(antiTamperingTimes: number  | undefined) {
        this['anti_tampering_times'] = antiTamperingTimes;
    }
    public get antiTamperingTimes(): number | undefined {
        return this['anti_tampering_times'];
    }
    public withDetectTamperingTimes(detectTamperingTimes: number): WtpProtectHostResponseInfo {
        this['detect_tampering_times'] = detectTamperingTimes;
        return this;
    }
    public set detectTamperingTimes(detectTamperingTimes: number  | undefined) {
        this['detect_tampering_times'] = detectTamperingTimes;
    }
    public get detectTamperingTimes(): number | undefined {
        return this['detect_tampering_times'];
    }
    public withLastDetectTime(lastDetectTime: number): WtpProtectHostResponseInfo {
        this['last_detect_time'] = lastDetectTime;
        return this;
    }
    public set lastDetectTime(lastDetectTime: number  | undefined) {
        this['last_detect_time'] = lastDetectTime;
    }
    public get lastDetectTime(): number | undefined {
        return this['last_detect_time'];
    }
    public withScheduledShutdownStatus(scheduledShutdownStatus: string): WtpProtectHostResponseInfo {
        this['scheduled_shutdown_status'] = scheduledShutdownStatus;
        return this;
    }
    public set scheduledShutdownStatus(scheduledShutdownStatus: string  | undefined) {
        this['scheduled_shutdown_status'] = scheduledShutdownStatus;
    }
    public get scheduledShutdownStatus(): string | undefined {
        return this['scheduled_shutdown_status'];
    }
    public withOsName(osName: string): WtpProtectHostResponseInfo {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withOsVersion(osVersion: string): WtpProtectHostResponseInfo {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withHostStatus(hostStatus: string): WtpProtectHostResponseInfo {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withAgentStatus(agentStatus: string): WtpProtectHostResponseInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withProtectDirNum(protectDirNum: number): WtpProtectHostResponseInfo {
        this['protect_dir_num'] = protectDirNum;
        return this;
    }
    public set protectDirNum(protectDirNum: number  | undefined) {
        this['protect_dir_num'] = protectDirNum;
    }
    public get protectDirNum(): number | undefined {
        return this['protect_dir_num'];
    }
    public withRemoteBackbupInfo(remoteBackbupInfo: WtpRemoteBackupResponseInfo): WtpProtectHostResponseInfo {
        this['remote_backbup_info'] = remoteBackbupInfo;
        return this;
    }
    public set remoteBackbupInfo(remoteBackbupInfo: WtpRemoteBackupResponseInfo  | undefined) {
        this['remote_backbup_info'] = remoteBackbupInfo;
    }
    public get remoteBackbupInfo(): WtpRemoteBackupResponseInfo | undefined {
        return this['remote_backbup_info'];
    }
}