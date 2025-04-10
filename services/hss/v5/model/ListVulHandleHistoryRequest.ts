

export class ListVulHandleHistoryRequest {
    private 'enterprise_project_id'?: string;
    public status?: Array<string>;
    private 'vul_id'?: string;
    private 'vul_type'?: string;
    private 'asset_value'?: string;
    private 'group_name'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'cluster_id'?: string;
    private 'sort_key'?: ListVulHandleHistoryRequestSortKeyEnum | string;
    private 'sort_dir'?: ListVulHandleHistoryRequestSortDirEnum | string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(enterpriseProjectId?: string, limit?: number, offset?: number) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulHandleHistoryRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withStatus(status: Array<string>): ListVulHandleHistoryRequest {
        this['status'] = status;
        return this;
    }
    public withVulId(vulId: string): ListVulHandleHistoryRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withVulType(vulType: string): ListVulHandleHistoryRequest {
        this['vul_type'] = vulType;
        return this;
    }
    public set vulType(vulType: string  | undefined) {
        this['vul_type'] = vulType;
    }
    public get vulType(): string | undefined {
        return this['vul_type'];
    }
    public withAssetValue(assetValue: string): ListVulHandleHistoryRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withGroupName(groupName: string): ListVulHandleHistoryRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withHostName(hostName: string): ListVulHandleHistoryRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ListVulHandleHistoryRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withClusterId(clusterId: string): ListVulHandleHistoryRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withSortKey(sortKey: ListVulHandleHistoryRequestSortKeyEnum | string): ListVulHandleHistoryRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListVulHandleHistoryRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListVulHandleHistoryRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListVulHandleHistoryRequestSortDirEnum | string): ListVulHandleHistoryRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListVulHandleHistoryRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListVulHandleHistoryRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withPublicIp(publicIp: string): ListVulHandleHistoryRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): ListVulHandleHistoryRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withLimit(limit: number): ListVulHandleHistoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVulHandleHistoryRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListVulHandleHistoryRequestSortKeyEnum {
    HANDLE_TIME = 'handle_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListVulHandleHistoryRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
