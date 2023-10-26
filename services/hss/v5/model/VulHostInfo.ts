

export class VulHostInfo {
    private 'host_id'?: string;
    private 'severity_level'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'agent_id'?: string;
    private 'cve_num'?: number;
    private 'cve_id_list'?: Array<string>;
    public status?: string;
    private 'repair_cmd'?: string;
    private 'app_path'?: string;
    private 'region_name'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'os_type'?: string;
    private 'asset_value'?: string;
    private 'is_affect_business'?: boolean;
    private 'first_scan_time'?: number;
    private 'scan_time'?: number;
    private 'support_restore'?: boolean;
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
    public withRegionName(regionName: string): VulHostInfo {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withPublicIp(publicIp: string): VulHostInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
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
}