import { ClusterSecurityCheckAppInfo } from './ClusterSecurityCheckAppInfo';
import { ClusterSecurityCheckBaseLineDetectionInfo } from './ClusterSecurityCheckBaseLineDetectionInfo';
import { ClusterSecurityCheckLocalImageVulInfo } from './ClusterSecurityCheckLocalImageVulInfo';
import { ClusterSecurityCheckPortInfo } from './ClusterSecurityCheckPortInfo';
import { ClusterSecurityCheckPrivilegedContainerInfo } from './ClusterSecurityCheckPrivilegedContainerInfo';
import { ClusterSecurityCheckProcessInfo } from './ClusterSecurityCheckProcessInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityCheckClusterReportResponse extends SdkResponse {
    private 'scan_time'?: number;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'cluster_category'?: ShowSecurityCheckClusterReportResponseClusterCategoryEnum | string;
    private 'local_image_vul_num'?: number;
    private 'risk_config_num'?: number;
    private 'privileged_container_num'?: number;
    private 'pod_num'?: number;
    private 'host_num'?: number;
    private 'container_num'?: number;
    private 'port_num'?: number;
    private 'process_num'?: number;
    private 'app_num'?: number;
    private 'local_image_vul_list'?: Array<ClusterSecurityCheckLocalImageVulInfo>;
    private 'baseline_detection_list'?: Array<ClusterSecurityCheckBaseLineDetectionInfo>;
    private 'privileged_container_list'?: Array<ClusterSecurityCheckPrivilegedContainerInfo>;
    private 'port_list'?: Array<ClusterSecurityCheckPortInfo>;
    private 'app_list'?: Array<ClusterSecurityCheckAppInfo>;
    private 'process_list'?: Array<ClusterSecurityCheckProcessInfo>;
    public constructor() { 
        super();
    }
    public withScanTime(scanTime: number): ShowSecurityCheckClusterReportResponse {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withClusterId(clusterId: string): ShowSecurityCheckClusterReportResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ShowSecurityCheckClusterReportResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterCategory(clusterCategory: ShowSecurityCheckClusterReportResponseClusterCategoryEnum | string): ShowSecurityCheckClusterReportResponse {
        this['cluster_category'] = clusterCategory;
        return this;
    }
    public set clusterCategory(clusterCategory: ShowSecurityCheckClusterReportResponseClusterCategoryEnum | string  | undefined) {
        this['cluster_category'] = clusterCategory;
    }
    public get clusterCategory(): ShowSecurityCheckClusterReportResponseClusterCategoryEnum | string | undefined {
        return this['cluster_category'];
    }
    public withLocalImageVulNum(localImageVulNum: number): ShowSecurityCheckClusterReportResponse {
        this['local_image_vul_num'] = localImageVulNum;
        return this;
    }
    public set localImageVulNum(localImageVulNum: number  | undefined) {
        this['local_image_vul_num'] = localImageVulNum;
    }
    public get localImageVulNum(): number | undefined {
        return this['local_image_vul_num'];
    }
    public withRiskConfigNum(riskConfigNum: number): ShowSecurityCheckClusterReportResponse {
        this['risk_config_num'] = riskConfigNum;
        return this;
    }
    public set riskConfigNum(riskConfigNum: number  | undefined) {
        this['risk_config_num'] = riskConfigNum;
    }
    public get riskConfigNum(): number | undefined {
        return this['risk_config_num'];
    }
    public withPrivilegedContainerNum(privilegedContainerNum: number): ShowSecurityCheckClusterReportResponse {
        this['privileged_container_num'] = privilegedContainerNum;
        return this;
    }
    public set privilegedContainerNum(privilegedContainerNum: number  | undefined) {
        this['privileged_container_num'] = privilegedContainerNum;
    }
    public get privilegedContainerNum(): number | undefined {
        return this['privileged_container_num'];
    }
    public withPodNum(podNum: number): ShowSecurityCheckClusterReportResponse {
        this['pod_num'] = podNum;
        return this;
    }
    public set podNum(podNum: number  | undefined) {
        this['pod_num'] = podNum;
    }
    public get podNum(): number | undefined {
        return this['pod_num'];
    }
    public withHostNum(hostNum: number): ShowSecurityCheckClusterReportResponse {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withContainerNum(containerNum: number): ShowSecurityCheckClusterReportResponse {
        this['container_num'] = containerNum;
        return this;
    }
    public set containerNum(containerNum: number  | undefined) {
        this['container_num'] = containerNum;
    }
    public get containerNum(): number | undefined {
        return this['container_num'];
    }
    public withPortNum(portNum: number): ShowSecurityCheckClusterReportResponse {
        this['port_num'] = portNum;
        return this;
    }
    public set portNum(portNum: number  | undefined) {
        this['port_num'] = portNum;
    }
    public get portNum(): number | undefined {
        return this['port_num'];
    }
    public withProcessNum(processNum: number): ShowSecurityCheckClusterReportResponse {
        this['process_num'] = processNum;
        return this;
    }
    public set processNum(processNum: number  | undefined) {
        this['process_num'] = processNum;
    }
    public get processNum(): number | undefined {
        return this['process_num'];
    }
    public withAppNum(appNum: number): ShowSecurityCheckClusterReportResponse {
        this['app_num'] = appNum;
        return this;
    }
    public set appNum(appNum: number  | undefined) {
        this['app_num'] = appNum;
    }
    public get appNum(): number | undefined {
        return this['app_num'];
    }
    public withLocalImageVulList(localImageVulList: Array<ClusterSecurityCheckLocalImageVulInfo>): ShowSecurityCheckClusterReportResponse {
        this['local_image_vul_list'] = localImageVulList;
        return this;
    }
    public set localImageVulList(localImageVulList: Array<ClusterSecurityCheckLocalImageVulInfo>  | undefined) {
        this['local_image_vul_list'] = localImageVulList;
    }
    public get localImageVulList(): Array<ClusterSecurityCheckLocalImageVulInfo> | undefined {
        return this['local_image_vul_list'];
    }
    public withBaselineDetectionList(baselineDetectionList: Array<ClusterSecurityCheckBaseLineDetectionInfo>): ShowSecurityCheckClusterReportResponse {
        this['baseline_detection_list'] = baselineDetectionList;
        return this;
    }
    public set baselineDetectionList(baselineDetectionList: Array<ClusterSecurityCheckBaseLineDetectionInfo>  | undefined) {
        this['baseline_detection_list'] = baselineDetectionList;
    }
    public get baselineDetectionList(): Array<ClusterSecurityCheckBaseLineDetectionInfo> | undefined {
        return this['baseline_detection_list'];
    }
    public withPrivilegedContainerList(privilegedContainerList: Array<ClusterSecurityCheckPrivilegedContainerInfo>): ShowSecurityCheckClusterReportResponse {
        this['privileged_container_list'] = privilegedContainerList;
        return this;
    }
    public set privilegedContainerList(privilegedContainerList: Array<ClusterSecurityCheckPrivilegedContainerInfo>  | undefined) {
        this['privileged_container_list'] = privilegedContainerList;
    }
    public get privilegedContainerList(): Array<ClusterSecurityCheckPrivilegedContainerInfo> | undefined {
        return this['privileged_container_list'];
    }
    public withPortList(portList: Array<ClusterSecurityCheckPortInfo>): ShowSecurityCheckClusterReportResponse {
        this['port_list'] = portList;
        return this;
    }
    public set portList(portList: Array<ClusterSecurityCheckPortInfo>  | undefined) {
        this['port_list'] = portList;
    }
    public get portList(): Array<ClusterSecurityCheckPortInfo> | undefined {
        return this['port_list'];
    }
    public withAppList(appList: Array<ClusterSecurityCheckAppInfo>): ShowSecurityCheckClusterReportResponse {
        this['app_list'] = appList;
        return this;
    }
    public set appList(appList: Array<ClusterSecurityCheckAppInfo>  | undefined) {
        this['app_list'] = appList;
    }
    public get appList(): Array<ClusterSecurityCheckAppInfo> | undefined {
        return this['app_list'];
    }
    public withProcessList(processList: Array<ClusterSecurityCheckProcessInfo>): ShowSecurityCheckClusterReportResponse {
        this['process_list'] = processList;
        return this;
    }
    public set processList(processList: Array<ClusterSecurityCheckProcessInfo>  | undefined) {
        this['process_list'] = processList;
    }
    public get processList(): Array<ClusterSecurityCheckProcessInfo> | undefined {
        return this['process_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSecurityCheckClusterReportResponseClusterCategoryEnum {
    CCE = 'CCE',
    TURBO = 'Turbo'
}
