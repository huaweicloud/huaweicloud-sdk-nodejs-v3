

export class WtpProtectHostResponseInfo {
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'asset_value'?: string;
    private 'os_bit'?: string;
    private 'os_type'?: string;
    private 'protect_status'?: string;
    private 'charging_mode'?: string;
    private 'resource_id'?: string;
    private 'rasp_protect_status'?: string;
    private 'anti_tampering_times'?: number;
    private 'detect_tampering_times'?: number;
    private 'os_name'?: string;
    private 'os_version'?: string;
    private 'host_status'?: string;
    private 'agent_status'?: string;
    private 'protect_dir_num'?: number;
    private 'abnormal_dir_list'?: Array<string>;
    private 'abnormal_reason'?: number;
    private 'backup_host_id'?: string;
    private 'interrupt_reason'?: string;
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
    public withGroupId(groupId: string): WtpProtectHostResponseInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
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
    public withChargingMode(chargingMode: string): WtpProtectHostResponseInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withResourceId(resourceId: string): WtpProtectHostResponseInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
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
    public withAbnormalDirList(abnormalDirList: Array<string>): WtpProtectHostResponseInfo {
        this['abnormal_dir_list'] = abnormalDirList;
        return this;
    }
    public set abnormalDirList(abnormalDirList: Array<string>  | undefined) {
        this['abnormal_dir_list'] = abnormalDirList;
    }
    public get abnormalDirList(): Array<string> | undefined {
        return this['abnormal_dir_list'];
    }
    public withAbnormalReason(abnormalReason: number): WtpProtectHostResponseInfo {
        this['abnormal_reason'] = abnormalReason;
        return this;
    }
    public set abnormalReason(abnormalReason: number  | undefined) {
        this['abnormal_reason'] = abnormalReason;
    }
    public get abnormalReason(): number | undefined {
        return this['abnormal_reason'];
    }
    public withBackupHostId(backupHostId: string): WtpProtectHostResponseInfo {
        this['backup_host_id'] = backupHostId;
        return this;
    }
    public set backupHostId(backupHostId: string  | undefined) {
        this['backup_host_id'] = backupHostId;
    }
    public get backupHostId(): string | undefined {
        return this['backup_host_id'];
    }
    public withInterruptReason(interruptReason: string): WtpProtectHostResponseInfo {
        this['interrupt_reason'] = interruptReason;
        return this;
    }
    public set interruptReason(interruptReason: string  | undefined) {
        this['interrupt_reason'] = interruptReason;
    }
    public get interruptReason(): string | undefined {
        return this['interrupt_reason'];
    }
}