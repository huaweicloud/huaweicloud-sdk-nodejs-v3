

export class SecurityCheckClusterReports {
    private 'report_id'?: string;
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    private 'cluster_category'?: SecurityCheckClusterReportsClusterCategoryEnum | string;
    public severity?: SecurityCheckClusterReportsSeverityEnum | string;
    private 'local_image_vul_num'?: number;
    private 'risk_config_num'?: number;
    private 'privileged_container_num'?: number;
    private 'scan_time'?: number;
    public constructor() { 
    }
    public withReportId(reportId: string): SecurityCheckClusterReports {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withClusterName(clusterName: string): SecurityCheckClusterReports {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): SecurityCheckClusterReports {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterCategory(clusterCategory: SecurityCheckClusterReportsClusterCategoryEnum | string): SecurityCheckClusterReports {
        this['cluster_category'] = clusterCategory;
        return this;
    }
    public set clusterCategory(clusterCategory: SecurityCheckClusterReportsClusterCategoryEnum | string  | undefined) {
        this['cluster_category'] = clusterCategory;
    }
    public get clusterCategory(): SecurityCheckClusterReportsClusterCategoryEnum | string | undefined {
        return this['cluster_category'];
    }
    public withSeverity(severity: SecurityCheckClusterReportsSeverityEnum | string): SecurityCheckClusterReports {
        this['severity'] = severity;
        return this;
    }
    public withLocalImageVulNum(localImageVulNum: number): SecurityCheckClusterReports {
        this['local_image_vul_num'] = localImageVulNum;
        return this;
    }
    public set localImageVulNum(localImageVulNum: number  | undefined) {
        this['local_image_vul_num'] = localImageVulNum;
    }
    public get localImageVulNum(): number | undefined {
        return this['local_image_vul_num'];
    }
    public withRiskConfigNum(riskConfigNum: number): SecurityCheckClusterReports {
        this['risk_config_num'] = riskConfigNum;
        return this;
    }
    public set riskConfigNum(riskConfigNum: number  | undefined) {
        this['risk_config_num'] = riskConfigNum;
    }
    public get riskConfigNum(): number | undefined {
        return this['risk_config_num'];
    }
    public withPrivilegedContainerNum(privilegedContainerNum: number): SecurityCheckClusterReports {
        this['privileged_container_num'] = privilegedContainerNum;
        return this;
    }
    public set privilegedContainerNum(privilegedContainerNum: number  | undefined) {
        this['privileged_container_num'] = privilegedContainerNum;
    }
    public get privilegedContainerNum(): number | undefined {
        return this['privileged_container_num'];
    }
    public withScanTime(scanTime: number): SecurityCheckClusterReports {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SecurityCheckClusterReportsClusterCategoryEnum {
    CCE = 'CCE',
    TURBO = 'Turbo'
}
/**
    * @export
    * @enum {string}
    */
export enum SecurityCheckClusterReportsSeverityEnum {
    SECURITY = 'Security',
    INSECURITY = 'Insecurity'
}
