import { VulHostHostsResponseInfoVulIdsInfo } from './VulHostHostsResponseInfoVulIdsInfo';
import { VulHostHostsResponseInfoVulNumWithRepairPriorityList } from './VulHostHostsResponseInfoVulNumWithRepairPriorityList';


export class VulHostHostsResponseInfoDataList {
    private 'host_id'?: string;
    private 'agent_id'?: string;
    private 'host_name'?: string;
    private 'region_name'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'os_type'?: string;
    private 'asset_value'?: string;
    private 'scan_time'?: number;
    private 'severity_level'?: string;
    public score?: number;
    public version?: string;
    private 'handle_status'?: string;
    private 'vul_num_with_repair_priority_list'?: Array<VulHostHostsResponseInfoVulNumWithRepairPriorityList>;
    private 'vul_ids_info'?: VulHostHostsResponseInfoVulIdsInfo;
    public constructor() { 
    }
    public withHostId(hostId: string): VulHostHostsResponseInfoDataList {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withAgentId(agentId: string): VulHostHostsResponseInfoDataList {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withHostName(hostName: string): VulHostHostsResponseInfoDataList {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withRegionName(regionName: string): VulHostHostsResponseInfoDataList {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withPublicIp(publicIp: string): VulHostHostsResponseInfoDataList {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): VulHostHostsResponseInfoDataList {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withGroupId(groupId: string): VulHostHostsResponseInfoDataList {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): VulHostHostsResponseInfoDataList {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withOsType(osType: string): VulHostHostsResponseInfoDataList {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withAssetValue(assetValue: string): VulHostHostsResponseInfoDataList {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withScanTime(scanTime: number): VulHostHostsResponseInfoDataList {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withSeverityLevel(severityLevel: string): VulHostHostsResponseInfoDataList {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withScore(score: number): VulHostHostsResponseInfoDataList {
        this['score'] = score;
        return this;
    }
    public withVersion(version: string): VulHostHostsResponseInfoDataList {
        this['version'] = version;
        return this;
    }
    public withHandleStatus(handleStatus: string): VulHostHostsResponseInfoDataList {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withVulNumWithRepairPriorityList(vulNumWithRepairPriorityList: Array<VulHostHostsResponseInfoVulNumWithRepairPriorityList>): VulHostHostsResponseInfoDataList {
        this['vul_num_with_repair_priority_list'] = vulNumWithRepairPriorityList;
        return this;
    }
    public set vulNumWithRepairPriorityList(vulNumWithRepairPriorityList: Array<VulHostHostsResponseInfoVulNumWithRepairPriorityList>  | undefined) {
        this['vul_num_with_repair_priority_list'] = vulNumWithRepairPriorityList;
    }
    public get vulNumWithRepairPriorityList(): Array<VulHostHostsResponseInfoVulNumWithRepairPriorityList> | undefined {
        return this['vul_num_with_repair_priority_list'];
    }
    public withVulIdsInfo(vulIdsInfo: VulHostHostsResponseInfoVulIdsInfo): VulHostHostsResponseInfoDataList {
        this['vul_ids_info'] = vulIdsInfo;
        return this;
    }
    public set vulIdsInfo(vulIdsInfo: VulHostHostsResponseInfoVulIdsInfo  | undefined) {
        this['vul_ids_info'] = vulIdsInfo;
    }
    public get vulIdsInfo(): VulHostHostsResponseInfoVulIdsInfo | undefined {
        return this['vul_ids_info'];
    }
}