

export class BatchExportSWRBaselineInfoRequestInfo {
    private 'image_id_list'?: Array<string>;
    private 'operate_all'?: boolean;
    private 'image_type'?: string;
    private 'vul_type'?: string;
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
    private 'instance_id'?: string;
    private 'cicd_name'?: string;
    private 'build_command_risk_level'?: string;
    private 'build_command_risk_name'?: string;
    private 'build_command_rule_id_list'?: Array<string>;
    private 'has_container'?: boolean;
    private 'vul_id_list'?: Array<string>;
    public constructor() { 
    }
    public withImageIdList(imageIdList: Array<string>): BatchExportSWRBaselineInfoRequestInfo {
        this['image_id_list'] = imageIdList;
        return this;
    }
    public set imageIdList(imageIdList: Array<string>  | undefined) {
        this['image_id_list'] = imageIdList;
    }
    public get imageIdList(): Array<string> | undefined {
        return this['image_id_list'];
    }
    public withOperateAll(operateAll: boolean): BatchExportSWRBaselineInfoRequestInfo {
        this['operate_all'] = operateAll;
        return this;
    }
    public set operateAll(operateAll: boolean  | undefined) {
        this['operate_all'] = operateAll;
    }
    public get operateAll(): boolean | undefined {
        return this['operate_all'];
    }
    public withImageType(imageType: string): BatchExportSWRBaselineInfoRequestInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withVulType(vulType: string): BatchExportSWRBaselineInfoRequestInfo {
        this['vul_type'] = vulType;
        return this;
    }
    public set vulType(vulType: string  | undefined) {
        this['vul_type'] = vulType;
    }
    public get vulType(): string | undefined {
        return this['vul_type'];
    }
    public withScanStatus(scanStatus: string): BatchExportSWRBaselineInfoRequestInfo {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withNamespace(namespace: string): BatchExportSWRBaselineInfoRequestInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): BatchExportSWRBaselineInfoRequestInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): BatchExportSWRBaselineInfoRequestInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withImageId(imageId: string): BatchExportSWRBaselineInfoRequestInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withLatestVersion(latestVersion: boolean): BatchExportSWRBaselineInfoRequestInfo {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: boolean  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): boolean | undefined {
        return this['latest_version'];
    }
    public withImageSize(imageSize: number): BatchExportSWRBaselineInfoRequestInfo {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withStartLatestUpdateTime(startLatestUpdateTime: number): BatchExportSWRBaselineInfoRequestInfo {
        this['start_latest_update_time'] = startLatestUpdateTime;
        return this;
    }
    public set startLatestUpdateTime(startLatestUpdateTime: number  | undefined) {
        this['start_latest_update_time'] = startLatestUpdateTime;
    }
    public get startLatestUpdateTime(): number | undefined {
        return this['start_latest_update_time'];
    }
    public withEndLatestUpdateTime(endLatestUpdateTime: number): BatchExportSWRBaselineInfoRequestInfo {
        this['end_latest_update_time'] = endLatestUpdateTime;
        return this;
    }
    public set endLatestUpdateTime(endLatestUpdateTime: number  | undefined) {
        this['end_latest_update_time'] = endLatestUpdateTime;
    }
    public get endLatestUpdateTime(): number | undefined {
        return this['end_latest_update_time'];
    }
    public withStartLatestScanTime(startLatestScanTime: number): BatchExportSWRBaselineInfoRequestInfo {
        this['start_latest_scan_time'] = startLatestScanTime;
        return this;
    }
    public set startLatestScanTime(startLatestScanTime: number  | undefined) {
        this['start_latest_scan_time'] = startLatestScanTime;
    }
    public get startLatestScanTime(): number | undefined {
        return this['start_latest_scan_time'];
    }
    public withEndLatestScanTime(endLatestScanTime: number): BatchExportSWRBaselineInfoRequestInfo {
        this['end_latest_scan_time'] = endLatestScanTime;
        return this;
    }
    public set endLatestScanTime(endLatestScanTime: number  | undefined) {
        this['end_latest_scan_time'] = endLatestScanTime;
    }
    public get endLatestScanTime(): number | undefined {
        return this['end_latest_scan_time'];
    }
    public withHasMaliciousFile(hasMaliciousFile: boolean): BatchExportSWRBaselineInfoRequestInfo {
        this['has_malicious_file'] = hasMaliciousFile;
        return this;
    }
    public set hasMaliciousFile(hasMaliciousFile: boolean  | undefined) {
        this['has_malicious_file'] = hasMaliciousFile;
    }
    public get hasMaliciousFile(): boolean | undefined {
        return this['has_malicious_file'];
    }
    public withHasVul(hasVul: boolean): BatchExportSWRBaselineInfoRequestInfo {
        this['has_vul'] = hasVul;
        return this;
    }
    public set hasVul(hasVul: boolean  | undefined) {
        this['has_vul'] = hasVul;
    }
    public get hasVul(): boolean | undefined {
        return this['has_vul'];
    }
    public withHasUnsafeSetting(hasUnsafeSetting: boolean): BatchExportSWRBaselineInfoRequestInfo {
        this['has_unsafe_setting'] = hasUnsafeSetting;
        return this;
    }
    public set hasUnsafeSetting(hasUnsafeSetting: boolean  | undefined) {
        this['has_unsafe_setting'] = hasUnsafeSetting;
    }
    public get hasUnsafeSetting(): boolean | undefined {
        return this['has_unsafe_setting'];
    }
    public withRisky(risky: boolean): BatchExportSWRBaselineInfoRequestInfo {
        this['risky'] = risky;
        return this;
    }
    public withSeverityLevel(severityLevel: string): BatchExportSWRBaselineInfoRequestInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withInstanceName(instanceName: string): BatchExportSWRBaselineInfoRequestInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): BatchExportSWRBaselineInfoRequestInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCicdName(cicdName: string): BatchExportSWRBaselineInfoRequestInfo {
        this['cicd_name'] = cicdName;
        return this;
    }
    public set cicdName(cicdName: string  | undefined) {
        this['cicd_name'] = cicdName;
    }
    public get cicdName(): string | undefined {
        return this['cicd_name'];
    }
    public withBuildCommandRiskLevel(buildCommandRiskLevel: string): BatchExportSWRBaselineInfoRequestInfo {
        this['build_command_risk_level'] = buildCommandRiskLevel;
        return this;
    }
    public set buildCommandRiskLevel(buildCommandRiskLevel: string  | undefined) {
        this['build_command_risk_level'] = buildCommandRiskLevel;
    }
    public get buildCommandRiskLevel(): string | undefined {
        return this['build_command_risk_level'];
    }
    public withBuildCommandRiskName(buildCommandRiskName: string): BatchExportSWRBaselineInfoRequestInfo {
        this['build_command_risk_name'] = buildCommandRiskName;
        return this;
    }
    public set buildCommandRiskName(buildCommandRiskName: string  | undefined) {
        this['build_command_risk_name'] = buildCommandRiskName;
    }
    public get buildCommandRiskName(): string | undefined {
        return this['build_command_risk_name'];
    }
    public withBuildCommandRuleIdList(buildCommandRuleIdList: Array<string>): BatchExportSWRBaselineInfoRequestInfo {
        this['build_command_rule_id_list'] = buildCommandRuleIdList;
        return this;
    }
    public set buildCommandRuleIdList(buildCommandRuleIdList: Array<string>  | undefined) {
        this['build_command_rule_id_list'] = buildCommandRuleIdList;
    }
    public get buildCommandRuleIdList(): Array<string> | undefined {
        return this['build_command_rule_id_list'];
    }
    public withHasContainer(hasContainer: boolean): BatchExportSWRBaselineInfoRequestInfo {
        this['has_container'] = hasContainer;
        return this;
    }
    public set hasContainer(hasContainer: boolean  | undefined) {
        this['has_container'] = hasContainer;
    }
    public get hasContainer(): boolean | undefined {
        return this['has_container'];
    }
    public withVulIdList(vulIdList: Array<string>): BatchExportSWRBaselineInfoRequestInfo {
        this['vul_id_list'] = vulIdList;
        return this;
    }
    public set vulIdList(vulIdList: Array<string>  | undefined) {
        this['vul_id_list'] = vulIdList;
    }
    public get vulIdList(): Array<string> | undefined {
        return this['vul_id_list'];
    }
}