

export class ListAntivirusHandleHistoryRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'malware_name'?: string;
    private 'file_path'?: string;
    private 'severity_list'?: Array<string>;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'asset_value'?: string;
    private 'handle_method'?: string;
    private 'user_name'?: string;
    private 'sort_dir'?: string;
    private 'event_type'?: number;
    private 'sort_key'?: string;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withRegion(region: string): ListAntivirusHandleHistoryRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAntivirusHandleHistoryRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListAntivirusHandleHistoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAntivirusHandleHistoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withMalwareName(malwareName: string): ListAntivirusHandleHistoryRequest {
        this['malware_name'] = malwareName;
        return this;
    }
    public set malwareName(malwareName: string  | undefined) {
        this['malware_name'] = malwareName;
    }
    public get malwareName(): string | undefined {
        return this['malware_name'];
    }
    public withFilePath(filePath: string): ListAntivirusHandleHistoryRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withSeverityList(severityList: Array<string>): ListAntivirusHandleHistoryRequest {
        this['severity_list'] = severityList;
        return this;
    }
    public set severityList(severityList: Array<string>  | undefined) {
        this['severity_list'] = severityList;
    }
    public get severityList(): Array<string> | undefined {
        return this['severity_list'];
    }
    public withHostName(hostName: string): ListAntivirusHandleHistoryRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): ListAntivirusHandleHistoryRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ListAntivirusHandleHistoryRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withAssetValue(assetValue: string): ListAntivirusHandleHistoryRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withHandleMethod(handleMethod: string): ListAntivirusHandleHistoryRequest {
        this['handle_method'] = handleMethod;
        return this;
    }
    public set handleMethod(handleMethod: string  | undefined) {
        this['handle_method'] = handleMethod;
    }
    public get handleMethod(): string | undefined {
        return this['handle_method'];
    }
    public withUserName(userName: string): ListAntivirusHandleHistoryRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withSortDir(sortDir: string): ListAntivirusHandleHistoryRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withEventType(eventType: number): ListAntivirusHandleHistoryRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withSortKey(sortKey: string): ListAntivirusHandleHistoryRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
}