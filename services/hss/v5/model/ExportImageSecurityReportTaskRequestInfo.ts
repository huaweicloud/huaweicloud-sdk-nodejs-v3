

export class ExportImageSecurityReportTaskRequestInfo {
    private 'export_size'?: number;
    private 'security_report_type'?: string;
    private 'image_id_list'?: Array<string>;
    private 'operate_all'?: boolean;
    private 'image_type'?: string;
    private 'scan_status'?: string;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'image_id'?: string;
    private 'latest_version'?: boolean;
    private 'image_size'?: number;
    private 'start_latest_update_time'?: number;
    private 'end_latest_update_time'?: number;
    private 'start_latest_scan_time'?: number;
    private 'end_latest_scan_time'?: number;
    private 'has_malicious_file'?: boolean;
    private 'has_vul'?: boolean;
    private 'has_unsafe_setting'?: boolean;
    public risky?: boolean;
    private 'severity_level'?: string;
    private 'instance_name'?: string;
    private 'cicd_name'?: string;
    private 'build_command_risk_level'?: string;
    private 'build_command_risk_name'?: string;
    private 'build_command_rule_id_list'?: Array<string>;
    public constructor(exportSize?: number, securityReportType?: string, operateAll?: boolean) { 
        this['export_size'] = exportSize;
        this['security_report_type'] = securityReportType;
        this['operate_all'] = operateAll;
    }
    public withExportSize(exportSize: number): ExportImageSecurityReportTaskRequestInfo {
        this['export_size'] = exportSize;
        return this;
    }
    public set exportSize(exportSize: number  | undefined) {
        this['export_size'] = exportSize;
    }
    public get exportSize(): number | undefined {
        return this['export_size'];
    }
    public withSecurityReportType(securityReportType: string): ExportImageSecurityReportTaskRequestInfo {
        this['security_report_type'] = securityReportType;
        return this;
    }
    public set securityReportType(securityReportType: string  | undefined) {
        this['security_report_type'] = securityReportType;
    }
    public get securityReportType(): string | undefined {
        return this['security_report_type'];
    }
    public withImageIdList(imageIdList: Array<string>): ExportImageSecurityReportTaskRequestInfo {
        this['image_id_list'] = imageIdList;
        return this;
    }
    public set imageIdList(imageIdList: Array<string>  | undefined) {
        this['image_id_list'] = imageIdList;
    }
    public get imageIdList(): Array<string> | undefined {
        return this['image_id_list'];
    }
    public withOperateAll(operateAll: boolean): ExportImageSecurityReportTaskRequestInfo {
        this['operate_all'] = operateAll;
        return this;
    }
    public set operateAll(operateAll: boolean  | undefined) {
        this['operate_all'] = operateAll;
    }
    public get operateAll(): boolean | undefined {
        return this['operate_all'];
    }
    public withImageType(imageType: string): ExportImageSecurityReportTaskRequestInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withScanStatus(scanStatus: string): ExportImageSecurityReportTaskRequestInfo {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withNamespace(namespace: string): ExportImageSecurityReportTaskRequestInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ExportImageSecurityReportTaskRequestInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ExportImageSecurityReportTaskRequestInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withImageId(imageId: string): ExportImageSecurityReportTaskRequestInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withLatestVersion(latestVersion: boolean): ExportImageSecurityReportTaskRequestInfo {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: boolean  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): boolean | undefined {
        return this['latest_version'];
    }
    public withImageSize(imageSize: number): ExportImageSecurityReportTaskRequestInfo {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withStartLatestUpdateTime(startLatestUpdateTime: number): ExportImageSecurityReportTaskRequestInfo {
        this['start_latest_update_time'] = startLatestUpdateTime;
        return this;
    }
    public set startLatestUpdateTime(startLatestUpdateTime: number  | undefined) {
        this['start_latest_update_time'] = startLatestUpdateTime;
    }
    public get startLatestUpdateTime(): number | undefined {
        return this['start_latest_update_time'];
    }
    public withEndLatestUpdateTime(endLatestUpdateTime: number): ExportImageSecurityReportTaskRequestInfo {
        this['end_latest_update_time'] = endLatestUpdateTime;
        return this;
    }
    public set endLatestUpdateTime(endLatestUpdateTime: number  | undefined) {
        this['end_latest_update_time'] = endLatestUpdateTime;
    }
    public get endLatestUpdateTime(): number | undefined {
        return this['end_latest_update_time'];
    }
    public withStartLatestScanTime(startLatestScanTime: number): ExportImageSecurityReportTaskRequestInfo {
        this['start_latest_scan_time'] = startLatestScanTime;
        return this;
    }
    public set startLatestScanTime(startLatestScanTime: number  | undefined) {
        this['start_latest_scan_time'] = startLatestScanTime;
    }
    public get startLatestScanTime(): number | undefined {
        return this['start_latest_scan_time'];
    }
    public withEndLatestScanTime(endLatestScanTime: number): ExportImageSecurityReportTaskRequestInfo {
        this['end_latest_scan_time'] = endLatestScanTime;
        return this;
    }
    public set endLatestScanTime(endLatestScanTime: number  | undefined) {
        this['end_latest_scan_time'] = endLatestScanTime;
    }
    public get endLatestScanTime(): number | undefined {
        return this['end_latest_scan_time'];
    }
    public withHasMaliciousFile(hasMaliciousFile: boolean): ExportImageSecurityReportTaskRequestInfo {
        this['has_malicious_file'] = hasMaliciousFile;
        return this;
    }
    public set hasMaliciousFile(hasMaliciousFile: boolean  | undefined) {
        this['has_malicious_file'] = hasMaliciousFile;
    }
    public get hasMaliciousFile(): boolean | undefined {
        return this['has_malicious_file'];
    }
    public withHasVul(hasVul: boolean): ExportImageSecurityReportTaskRequestInfo {
        this['has_vul'] = hasVul;
        return this;
    }
    public set hasVul(hasVul: boolean  | undefined) {
        this['has_vul'] = hasVul;
    }
    public get hasVul(): boolean | undefined {
        return this['has_vul'];
    }
    public withHasUnsafeSetting(hasUnsafeSetting: boolean): ExportImageSecurityReportTaskRequestInfo {
        this['has_unsafe_setting'] = hasUnsafeSetting;
        return this;
    }
    public set hasUnsafeSetting(hasUnsafeSetting: boolean  | undefined) {
        this['has_unsafe_setting'] = hasUnsafeSetting;
    }
    public get hasUnsafeSetting(): boolean | undefined {
        return this['has_unsafe_setting'];
    }
    public withRisky(risky: boolean): ExportImageSecurityReportTaskRequestInfo {
        this['risky'] = risky;
        return this;
    }
    public withSeverityLevel(severityLevel: string): ExportImageSecurityReportTaskRequestInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withInstanceName(instanceName: string): ExportImageSecurityReportTaskRequestInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withCicdName(cicdName: string): ExportImageSecurityReportTaskRequestInfo {
        this['cicd_name'] = cicdName;
        return this;
    }
    public set cicdName(cicdName: string  | undefined) {
        this['cicd_name'] = cicdName;
    }
    public get cicdName(): string | undefined {
        return this['cicd_name'];
    }
    public withBuildCommandRiskLevel(buildCommandRiskLevel: string): ExportImageSecurityReportTaskRequestInfo {
        this['build_command_risk_level'] = buildCommandRiskLevel;
        return this;
    }
    public set buildCommandRiskLevel(buildCommandRiskLevel: string  | undefined) {
        this['build_command_risk_level'] = buildCommandRiskLevel;
    }
    public get buildCommandRiskLevel(): string | undefined {
        return this['build_command_risk_level'];
    }
    public withBuildCommandRiskName(buildCommandRiskName: string): ExportImageSecurityReportTaskRequestInfo {
        this['build_command_risk_name'] = buildCommandRiskName;
        return this;
    }
    public set buildCommandRiskName(buildCommandRiskName: string  | undefined) {
        this['build_command_risk_name'] = buildCommandRiskName;
    }
    public get buildCommandRiskName(): string | undefined {
        return this['build_command_risk_name'];
    }
    public withBuildCommandRuleIdList(buildCommandRuleIdList: Array<string>): ExportImageSecurityReportTaskRequestInfo {
        this['build_command_rule_id_list'] = buildCommandRuleIdList;
        return this;
    }
    public set buildCommandRuleIdList(buildCommandRuleIdList: Array<string>  | undefined) {
        this['build_command_rule_id_list'] = buildCommandRuleIdList;
    }
    public get buildCommandRuleIdList(): Array<string> | undefined {
        return this['build_command_rule_id_list'];
    }
}