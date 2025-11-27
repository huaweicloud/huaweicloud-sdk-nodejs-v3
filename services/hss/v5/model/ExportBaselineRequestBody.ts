

export class ExportBaselineRequestBody {
    public category?: string;
    private 'export_size'?: number;
    private 'group_id'?: string;
    private 'check_name'?: string;
    public standard?: string;
    private 'scan_result'?: string;
    public severity?: string;
    private 'host_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'export_headers'?: Array<Array<string>>;
    public tag?: string;
    private 'check_type'?: string;
    private 'statistics_scan_result'?: string;
    private 'check_rule_name'?: string;
    private 'cluster_id'?: string;
    public constructor(exportHeaders?: Array<Array<string>>) { 
        this['export_headers'] = exportHeaders;
    }
    public withCategory(category: string): ExportBaselineRequestBody {
        this['category'] = category;
        return this;
    }
    public withExportSize(exportSize: number): ExportBaselineRequestBody {
        this['export_size'] = exportSize;
        return this;
    }
    public set exportSize(exportSize: number  | undefined) {
        this['export_size'] = exportSize;
    }
    public get exportSize(): number | undefined {
        return this['export_size'];
    }
    public withGroupId(groupId: string): ExportBaselineRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withCheckName(checkName: string): ExportBaselineRequestBody {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withStandard(standard: string): ExportBaselineRequestBody {
        this['standard'] = standard;
        return this;
    }
    public withScanResult(scanResult: string): ExportBaselineRequestBody {
        this['scan_result'] = scanResult;
        return this;
    }
    public set scanResult(scanResult: string  | undefined) {
        this['scan_result'] = scanResult;
    }
    public get scanResult(): string | undefined {
        return this['scan_result'];
    }
    public withSeverity(severity: string): ExportBaselineRequestBody {
        this['severity'] = severity;
        return this;
    }
    public withHostId(hostId: string): ExportBaselineRequestBody {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withLimit(limit: number): ExportBaselineRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ExportBaselineRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withExportHeaders(exportHeaders: Array<Array<string>>): ExportBaselineRequestBody {
        this['export_headers'] = exportHeaders;
        return this;
    }
    public set exportHeaders(exportHeaders: Array<Array<string>>  | undefined) {
        this['export_headers'] = exportHeaders;
    }
    public get exportHeaders(): Array<Array<string>> | undefined {
        return this['export_headers'];
    }
    public withTag(tag: string): ExportBaselineRequestBody {
        this['tag'] = tag;
        return this;
    }
    public withCheckType(checkType: string): ExportBaselineRequestBody {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withStatisticsScanResult(statisticsScanResult: string): ExportBaselineRequestBody {
        this['statistics_scan_result'] = statisticsScanResult;
        return this;
    }
    public set statisticsScanResult(statisticsScanResult: string  | undefined) {
        this['statistics_scan_result'] = statisticsScanResult;
    }
    public get statisticsScanResult(): string | undefined {
        return this['statistics_scan_result'];
    }
    public withCheckRuleName(checkRuleName: string): ExportBaselineRequestBody {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withClusterId(clusterId: string): ExportBaselineRequestBody {
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