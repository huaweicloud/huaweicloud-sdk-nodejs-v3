import { HostVulInfoDisabledOperateTypes } from './HostVulInfoDisabledOperateTypes';


export class VulHostInfo {
    private 'host_id'?: string;
    private 'agent_id'?: string;
    private 'repair_necessity'?: string;
    private 'severity_level'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'cve_num'?: number;
    private 'cve_id_list'?: Array<string>;
    public status?: string;
    public remark?: string;
    private 'repair_cmd'?: string;
    public version?: string;
    private 'app_path'?: string;
    private 'is_affect_business'?: boolean;
    private 'asset_value'?: string;
    private 'private_ip'?: string;
    private 'group_name'?: string;
    private 'group_id'?: string;
    private 'os_type'?: string;
    private 'os_name'?: string;
    private 'os_version'?: string;
    private 'os_kernel'?: string;
    private 'host_status'?: string;
    private 'first_scan_time'?: number;
    private 'scan_time'?: number;
    private 'failed_reason'?: string;
    private 'support_restore'?: boolean;
    private 'backup_name'?: string;
    private 'agent_status'?: string;
    private 'disabled_operate_types'?: Array<HostVulInfoDisabledOperateTypes>;
    private 'repair_priority'?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): VulHostInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withAgentId(agentId: string): VulHostInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withRepairNecessity(repairNecessity: string): VulHostInfo {
        this['repair_necessity'] = repairNecessity;
        return this;
    }
    public set repairNecessity(repairNecessity: string  | undefined) {
        this['repair_necessity'] = repairNecessity;
    }
    public get repairNecessity(): string | undefined {
        return this['repair_necessity'];
    }
    public withSeverityLevel(severityLevel: string): VulHostInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withHostName(hostName: string): VulHostInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): VulHostInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withCveNum(cveNum: number): VulHostInfo {
        this['cve_num'] = cveNum;
        return this;
    }
    public set cveNum(cveNum: number  | undefined) {
        this['cve_num'] = cveNum;
    }
    public get cveNum(): number | undefined {
        return this['cve_num'];
    }
    public withCveIdList(cveIdList: Array<string>): VulHostInfo {
        this['cve_id_list'] = cveIdList;
        return this;
    }
    public set cveIdList(cveIdList: Array<string>  | undefined) {
        this['cve_id_list'] = cveIdList;
    }
    public get cveIdList(): Array<string> | undefined {
        return this['cve_id_list'];
    }
    public withStatus(status: string): VulHostInfo {
        this['status'] = status;
        return this;
    }
    public withRemark(remark: string): VulHostInfo {
        this['remark'] = remark;
        return this;
    }
    public withRepairCmd(repairCmd: string): VulHostInfo {
        this['repair_cmd'] = repairCmd;
        return this;
    }
    public set repairCmd(repairCmd: string  | undefined) {
        this['repair_cmd'] = repairCmd;
    }
    public get repairCmd(): string | undefined {
        return this['repair_cmd'];
    }
    public withVersion(version: string): VulHostInfo {
        this['version'] = version;
        return this;
    }
    public withAppPath(appPath: string): VulHostInfo {
        this['app_path'] = appPath;
        return this;
    }
    public set appPath(appPath: string  | undefined) {
        this['app_path'] = appPath;
    }
    public get appPath(): string | undefined {
        return this['app_path'];
    }
    public withIsAffectBusiness(isAffectBusiness: boolean): VulHostInfo {
        this['is_affect_business'] = isAffectBusiness;
        return this;
    }
    public set isAffectBusiness(isAffectBusiness: boolean  | undefined) {
        this['is_affect_business'] = isAffectBusiness;
    }
    public get isAffectBusiness(): boolean | undefined {
        return this['is_affect_business'];
    }
    public withAssetValue(assetValue: string): VulHostInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withPrivateIp(privateIp: string): VulHostInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withGroupName(groupName: string): VulHostInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupId(groupId: string): VulHostInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withOsType(osType: string): VulHostInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withOsName(osName: string): VulHostInfo {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withOsVersion(osVersion: string): VulHostInfo {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withOsKernel(osKernel: string): VulHostInfo {
        this['os_kernel'] = osKernel;
        return this;
    }
    public set osKernel(osKernel: string  | undefined) {
        this['os_kernel'] = osKernel;
    }
    public get osKernel(): string | undefined {
        return this['os_kernel'];
    }
    public withHostStatus(hostStatus: string): VulHostInfo {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withFirstScanTime(firstScanTime: number): VulHostInfo {
        this['first_scan_time'] = firstScanTime;
        return this;
    }
    public set firstScanTime(firstScanTime: number  | undefined) {
        this['first_scan_time'] = firstScanTime;
    }
    public get firstScanTime(): number | undefined {
        return this['first_scan_time'];
    }
    public withScanTime(scanTime: number): VulHostInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withFailedReason(failedReason: string): VulHostInfo {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withSupportRestore(supportRestore: boolean): VulHostInfo {
        this['support_restore'] = supportRestore;
        return this;
    }
    public set supportRestore(supportRestore: boolean  | undefined) {
        this['support_restore'] = supportRestore;
    }
    public get supportRestore(): boolean | undefined {
        return this['support_restore'];
    }
    public withBackupName(backupName: string): VulHostInfo {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string  | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName(): string | undefined {
        return this['backup_name'];
    }
    public withAgentStatus(agentStatus: string): VulHostInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withDisabledOperateTypes(disabledOperateTypes: Array<HostVulInfoDisabledOperateTypes>): VulHostInfo {
        this['disabled_operate_types'] = disabledOperateTypes;
        return this;
    }
    public set disabledOperateTypes(disabledOperateTypes: Array<HostVulInfoDisabledOperateTypes>  | undefined) {
        this['disabled_operate_types'] = disabledOperateTypes;
    }
    public get disabledOperateTypes(): Array<HostVulInfoDisabledOperateTypes> | undefined {
        return this['disabled_operate_types'];
    }
    public withRepairPriority(repairPriority: string): VulHostInfo {
        this['repair_priority'] = repairPriority;
        return this;
    }
    public set repairPriority(repairPriority: string  | undefined) {
        this['repair_priority'] = repairPriority;
    }
    public get repairPriority(): string | undefined {
        return this['repair_priority'];
    }
}