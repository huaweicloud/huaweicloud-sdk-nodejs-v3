import { VulCveInfo } from './VulCveInfo';


export class VulhandleHistoryResponseInfoDataList {
    public id?: string;
    private 'user_name'?: string;
    public type?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'handle_time'?: string;
    public status?: string;
    private 'failed_reason'?: string;
    public description?: string;
    private 'vul_id'?: string;
    private 'vul_name'?: string;
    private 'asset_value'?: string;
    private 'cve_list'?: Array<VulCveInfo>;
    private 'app_name'?: string;
    private 'app_path'?: string;
    private 'app_version'?: string;
    private 'handle_type'?: string;
    private 'cluster_id'?: string;
    public constructor() { 
    }
    public withId(id: string): VulhandleHistoryResponseInfoDataList {
        this['id'] = id;
        return this;
    }
    public withUserName(userName: string): VulhandleHistoryResponseInfoDataList {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withType(type: string): VulhandleHistoryResponseInfoDataList {
        this['type'] = type;
        return this;
    }
    public withHostId(hostId: string): VulhandleHistoryResponseInfoDataList {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): VulhandleHistoryResponseInfoDataList {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPublicIp(publicIp: string): VulhandleHistoryResponseInfoDataList {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): VulhandleHistoryResponseInfoDataList {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withHandleTime(handleTime: string): VulhandleHistoryResponseInfoDataList {
        this['handle_time'] = handleTime;
        return this;
    }
    public set handleTime(handleTime: string  | undefined) {
        this['handle_time'] = handleTime;
    }
    public get handleTime(): string | undefined {
        return this['handle_time'];
    }
    public withStatus(status: string): VulhandleHistoryResponseInfoDataList {
        this['status'] = status;
        return this;
    }
    public withFailedReason(failedReason: string): VulhandleHistoryResponseInfoDataList {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withDescription(description: string): VulhandleHistoryResponseInfoDataList {
        this['description'] = description;
        return this;
    }
    public withVulId(vulId: string): VulhandleHistoryResponseInfoDataList {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withVulName(vulName: string): VulhandleHistoryResponseInfoDataList {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withAssetValue(assetValue: string): VulhandleHistoryResponseInfoDataList {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withCveList(cveList: Array<VulCveInfo>): VulhandleHistoryResponseInfoDataList {
        this['cve_list'] = cveList;
        return this;
    }
    public set cveList(cveList: Array<VulCveInfo>  | undefined) {
        this['cve_list'] = cveList;
    }
    public get cveList(): Array<VulCveInfo> | undefined {
        return this['cve_list'];
    }
    public withAppName(appName: string): VulhandleHistoryResponseInfoDataList {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppPath(appPath: string): VulhandleHistoryResponseInfoDataList {
        this['app_path'] = appPath;
        return this;
    }
    public set appPath(appPath: string  | undefined) {
        this['app_path'] = appPath;
    }
    public get appPath(): string | undefined {
        return this['app_path'];
    }
    public withAppVersion(appVersion: string): VulhandleHistoryResponseInfoDataList {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withHandleType(handleType: string): VulhandleHistoryResponseInfoDataList {
        this['handle_type'] = handleType;
        return this;
    }
    public set handleType(handleType: string  | undefined) {
        this['handle_type'] = handleType;
    }
    public get handleType(): string | undefined {
        return this['handle_type'];
    }
    public withClusterId(clusterId: string): VulhandleHistoryResponseInfoDataList {
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