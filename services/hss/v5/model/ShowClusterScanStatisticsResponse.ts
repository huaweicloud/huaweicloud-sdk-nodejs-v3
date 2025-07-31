
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterScanStatisticsResponse extends SdkResponse {
    private 'risk_cluster_num'?: number;
    private 'app_vul_cluster_num'?: number;
    private 'unscan_cluster_num'?: number;
    private 'all_cluster_num'?: number;
    public constructor() { 
        super();
    }
    public withRiskClusterNum(riskClusterNum: number): ShowClusterScanStatisticsResponse {
        this['risk_cluster_num'] = riskClusterNum;
        return this;
    }
    public set riskClusterNum(riskClusterNum: number  | undefined) {
        this['risk_cluster_num'] = riskClusterNum;
    }
    public get riskClusterNum(): number | undefined {
        return this['risk_cluster_num'];
    }
    public withAppVulClusterNum(appVulClusterNum: number): ShowClusterScanStatisticsResponse {
        this['app_vul_cluster_num'] = appVulClusterNum;
        return this;
    }
    public set appVulClusterNum(appVulClusterNum: number  | undefined) {
        this['app_vul_cluster_num'] = appVulClusterNum;
    }
    public get appVulClusterNum(): number | undefined {
        return this['app_vul_cluster_num'];
    }
    public withUnscanClusterNum(unscanClusterNum: number): ShowClusterScanStatisticsResponse {
        this['unscan_cluster_num'] = unscanClusterNum;
        return this;
    }
    public set unscanClusterNum(unscanClusterNum: number  | undefined) {
        this['unscan_cluster_num'] = unscanClusterNum;
    }
    public get unscanClusterNum(): number | undefined {
        return this['unscan_cluster_num'];
    }
    public withAllClusterNum(allClusterNum: number): ShowClusterScanStatisticsResponse {
        this['all_cluster_num'] = allClusterNum;
        return this;
    }
    public set allClusterNum(allClusterNum: number  | undefined) {
        this['all_cluster_num'] = allClusterNum;
    }
    public get allClusterNum(): number | undefined {
        return this['all_cluster_num'];
    }
}