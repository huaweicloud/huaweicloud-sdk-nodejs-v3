import { CreateDaemonsetRequestBodyScheduleInfo } from './CreateDaemonsetRequestBodyScheduleInfo';
import { DaemonsetYamlResponseInfoDsInfo } from './DaemonsetYamlResponseInfoDsInfo';
import { RuntimeRequestBody } from './RuntimeRequestBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAgentDaemonsetDetailInfoResponse extends SdkResponse {
    private 'yaml_content'?: string;
    private 'node_num'?: number;
    private 'runtime_info'?: Array<RuntimeRequestBody>;
    private 'cluster_status'?: string;
    private 'ds_info'?: DaemonsetYamlResponseInfoDsInfo;
    private 'installed_status'?: string;
    private 'schedule_info'?: CreateDaemonsetRequestBodyScheduleInfo;
    public constructor() { 
        super();
    }
    public withYamlContent(yamlContent: string): ShowAgentDaemonsetDetailInfoResponse {
        this['yaml_content'] = yamlContent;
        return this;
    }
    public set yamlContent(yamlContent: string  | undefined) {
        this['yaml_content'] = yamlContent;
    }
    public get yamlContent(): string | undefined {
        return this['yaml_content'];
    }
    public withNodeNum(nodeNum: number): ShowAgentDaemonsetDetailInfoResponse {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withRuntimeInfo(runtimeInfo: Array<RuntimeRequestBody>): ShowAgentDaemonsetDetailInfoResponse {
        this['runtime_info'] = runtimeInfo;
        return this;
    }
    public set runtimeInfo(runtimeInfo: Array<RuntimeRequestBody>  | undefined) {
        this['runtime_info'] = runtimeInfo;
    }
    public get runtimeInfo(): Array<RuntimeRequestBody> | undefined {
        return this['runtime_info'];
    }
    public withClusterStatus(clusterStatus: string): ShowAgentDaemonsetDetailInfoResponse {
        this['cluster_status'] = clusterStatus;
        return this;
    }
    public set clusterStatus(clusterStatus: string  | undefined) {
        this['cluster_status'] = clusterStatus;
    }
    public get clusterStatus(): string | undefined {
        return this['cluster_status'];
    }
    public withDsInfo(dsInfo: DaemonsetYamlResponseInfoDsInfo): ShowAgentDaemonsetDetailInfoResponse {
        this['ds_info'] = dsInfo;
        return this;
    }
    public set dsInfo(dsInfo: DaemonsetYamlResponseInfoDsInfo  | undefined) {
        this['ds_info'] = dsInfo;
    }
    public get dsInfo(): DaemonsetYamlResponseInfoDsInfo | undefined {
        return this['ds_info'];
    }
    public withInstalledStatus(installedStatus: string): ShowAgentDaemonsetDetailInfoResponse {
        this['installed_status'] = installedStatus;
        return this;
    }
    public set installedStatus(installedStatus: string  | undefined) {
        this['installed_status'] = installedStatus;
    }
    public get installedStatus(): string | undefined {
        return this['installed_status'];
    }
    public withScheduleInfo(scheduleInfo: CreateDaemonsetRequestBodyScheduleInfo): ShowAgentDaemonsetDetailInfoResponse {
        this['schedule_info'] = scheduleInfo;
        return this;
    }
    public set scheduleInfo(scheduleInfo: CreateDaemonsetRequestBodyScheduleInfo  | undefined) {
        this['schedule_info'] = scheduleInfo;
    }
    public get scheduleInfo(): CreateDaemonsetRequestBodyScheduleInfo | undefined {
        return this['schedule_info'];
    }
}