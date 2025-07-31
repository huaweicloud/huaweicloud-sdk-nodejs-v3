

export class ListClusterRisksResponseInfoDataList {
    private 'risk_id'?: string;
    private 'risk_name'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'risk_level'?: string;
    private 'risk_category'?: string;
    private 'risk_num'?: number;
    private 'last_scan_time'?: number;
    public description?: string;
    public remediation?: string;
    public constructor() { 
    }
    public withRiskId(riskId: string): ListClusterRisksResponseInfoDataList {
        this['risk_id'] = riskId;
        return this;
    }
    public set riskId(riskId: string  | undefined) {
        this['risk_id'] = riskId;
    }
    public get riskId(): string | undefined {
        return this['risk_id'];
    }
    public withRiskName(riskName: string): ListClusterRisksResponseInfoDataList {
        this['risk_name'] = riskName;
        return this;
    }
    public set riskName(riskName: string  | undefined) {
        this['risk_name'] = riskName;
    }
    public get riskName(): string | undefined {
        return this['risk_name'];
    }
    public withClusterId(clusterId: string): ListClusterRisksResponseInfoDataList {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ListClusterRisksResponseInfoDataList {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withRiskLevel(riskLevel: string): ListClusterRisksResponseInfoDataList {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withRiskCategory(riskCategory: string): ListClusterRisksResponseInfoDataList {
        this['risk_category'] = riskCategory;
        return this;
    }
    public set riskCategory(riskCategory: string  | undefined) {
        this['risk_category'] = riskCategory;
    }
    public get riskCategory(): string | undefined {
        return this['risk_category'];
    }
    public withRiskNum(riskNum: number): ListClusterRisksResponseInfoDataList {
        this['risk_num'] = riskNum;
        return this;
    }
    public set riskNum(riskNum: number  | undefined) {
        this['risk_num'] = riskNum;
    }
    public get riskNum(): number | undefined {
        return this['risk_num'];
    }
    public withLastScanTime(lastScanTime: number): ListClusterRisksResponseInfoDataList {
        this['last_scan_time'] = lastScanTime;
        return this;
    }
    public set lastScanTime(lastScanTime: number  | undefined) {
        this['last_scan_time'] = lastScanTime;
    }
    public get lastScanTime(): number | undefined {
        return this['last_scan_time'];
    }
    public withDescription(description: string): ListClusterRisksResponseInfoDataList {
        this['description'] = description;
        return this;
    }
    public withRemediation(remediation: string): ListClusterRisksResponseInfoDataList {
        this['remediation'] = remediation;
        return this;
    }
}